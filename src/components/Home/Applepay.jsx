import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OLkEpDd781F56V63802JVFKkmxDfAy1BDqtSf3diKC0nkuaBFrw6hWHxHzqEi6FBzkIcrtjlOfxq49tq2kr6xyp00J4ZeKzpg');

const Applepay = () => {
  const handleClick = async (event) => {
    const stripe = await stripePromise;
    const paymentRequest = stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: 'Total',
        amount: 1000, // in cents
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    const elements = stripe.elements();
    const paymentRequestButton = elements.create('paymentRequestButton', {
      paymentRequest,
    });

    // Check the availability of Apple Pay and Google Pay
    const applePayAvailable = await paymentRequest.canMakePayment('apple-pay');
    const googlePayAvailable = await paymentRequest.canMakePayment('google-pay');

    // Mount the Payment Request Button Element
    paymentRequestButton.mount('#payment-request-button');

    // Handle payment request
    paymentRequest.on('paymentmethod', async (event) => {
      const { error } = await stripe.confirmPaymentIntent({
        clientSecret: 'sk_test_51OLkEpDd781F56V6YtbwnFjQW58MycDXQUEqfc5th5WDY0ccURVjp82oWc9Pq2NdV1iuTGiZjhD0IWtE7QWiOYK400WnletDlV',
        paymentMethodId: event.paymentMethod.id,
      });

      if (error) {
        console.error('Payment failed:', error);
      } else {
        console.log('Payment successful');
      }
    });

    // Show Payment Request button only if either Apple Pay or Google Pay is available
    if (applePayAvailable || googlePayAvailable) {
      document.getElementById('payment-request-button').style.display = 'block';
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Checkout</button>
      <div id="payment-request-button" style={{ display: 'none' }}></div>
    </div>
  );
};

export default Applepay;
