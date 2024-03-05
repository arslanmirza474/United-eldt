import React, { useEffect } from 'react';

const Applepay = () => {
  let paymentRequest = null;

  useEffect(() => {
    initializeApplePay();
  }, []);

  const initializeApplePay = () => {
    if (window.PaymentRequest) {
      paymentRequest = createPaymentRequest();
      paymentRequest.canMakePayment()
        .then((result) => {
          if (result) {
            // Display PaymentRequest dialog on interaction with the existing checkout button
            document.getElementById('buyButton')
              .addEventListener('click', onBuyClicked);
          }
        })
        .catch((err) => {
          console.error('canMakePayment() error:', err);
        });
    } else {
      console.error('PaymentRequest API not available.');
    }
  };

  const createPaymentRequest = () => {
    const methodData = [{
      supportedMethods: 'https://apple.com/apple-pay',
      data: getApplePaymentsConfiguration(),
    }];

    const details = {
      total: { label: 'Test Purchase', amount: { currency: 'USD', value: '1.00' } },
    };

    const options = {
      requestPayerEmail: true,
      requestPayerName: true,
    };

    return new PaymentRequest(methodData, details, options);
  };

  const getApplePaymentsConfiguration = () => {
    return {
      merchantIdentifier: 'your_merchant_identifier',
      countryCode: 'US',
      currencyCode: 'USD',
    };
  };

  const onBuyClicked = () => {
    if (paymentRequest) {
      paymentRequest.show()
        .then((response) => {
          // Dismiss payment dialog.
          response.complete('success');
          handlePaymentResponse(response);
        })
        .catch((err) => {
          console.error('show() error:', err);
        });
    } else {
      console.error('PaymentRequest is not initialized.');
    }
  };

  const handlePaymentResponse = (response) => {
    // Extract and handle payment token for Apple Pay
    const paymentToken = response.details.paymentToken;
    console.log('Payment token:', paymentToken);
    // Send the payment token to your backend for further processing
  };

  return (
    <div id="checkout">
      <button id="buyButton">Checkout</button>
    </div>
  );
};

export default Applepay;
