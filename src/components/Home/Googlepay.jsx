import React, { useState } from "react";
import axios from "axios";
import {
  PaymentRequestButtonElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const Googlepay = ({ purchase }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentRequest, setPaymentRequest] = useState(null);

  React.useEffect(() => {
    if (!stripe || !elements) {
      return;
    }

    const pr = stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        label: "UnitedELTD Course",
        amount: Math.round(purchase.price * 100),
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
      }
    });

    pr.on("paymentmethod", async (e) => {
      const { data: clientSecret } = await axios.post(
        "https://server-of-united-eldt.vercel.app/api/create-payment-intents",
        {
          amount: purchase.price,
          courseEnrollments: [
            {
              courseId: purchase._id,
              lessonIndex: 0,
              language: purchase.language || "English",
            },
          ],
          fullName: e.payerName,
          Email: e.payerEmail,
          price: purchase.price,
          address: e.shippingAddress.addressLine,
          zip: e.shippingAddress.postalCode,
        }
      );

      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: e.paymentMethod.id,
          receipt_email: e.payerEmail, // confirmation receipt
        }
      );

      if (paymentIntent?.status === "succeeded") {
        const res = await axios.post(
          "https://server-of-united-eldt.vercel.app/api/enroll-student",
          {
            amount: purchase.price,
            courseEnrollments: [
              {
                courseId: purchase._id,
                lessonIndex: 0,
                language: purchase.language || "English",
              },
            ],
            fullName: e.payerName,
            Email: e.payerEmail,
            price: purchase.price,
            address: e.shippingAddress.addressLine,
            zip: e.shippingAddress.postalCode,
          }
        );

        res.status === 200
          ? console.log("Payment successful")
          : console.log("Payment successful but failed to save data");

        // show toasts
      } else {
        console.log(
          error.message ||
          "Some error occured while processing your payment. Please try again later"
        );
        // show error message / toast
      }
    });
  }, [stripe, elements]);

  return (
    <div className="buttonofpayment">
      {paymentRequest && (
        <PaymentRequestButtonElement options={{ paymentRequest }} />
      )}
    </div>
  );
};

export default Googlepay;