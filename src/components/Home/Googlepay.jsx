import React, { useEffect } from 'react';

const GooglePay = () => {
  let paymentRequest = null;

  useEffect(() => {
    initializeGooglePay();
  }, []);

  const initializeGooglePay = () => {
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
      supportedMethods: 'https://google.com/pay',
      data: getGooglePaymentsConfiguration(),
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

  const getGooglePaymentsConfiguration = () => {
    return {
      environment: 'TEST',
      apiVersion: 2,
      apiVersionMinor: 0,
      merchantInfo: {
        merchantName: 'Devlop',
      },
      allowedPaymentMethods: [{
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'DISCOVER', 'INTERAC', 'JCB', 'MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            'gateway': 'authorizenet',
            'gatewayMerchantId': 'BCR2DN4T4HNPZLZY',
          },
        },
      }],
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
    // Extract and handle payment token
    const paymentToken = response.details.paymentToken;
    console.log('Payment token:', paymentToken);
    // Send the payment token to your backend for further processing
  };

  return (
    <div id="checkout">
      <button id="buyButton">Checkout</button>
    </div>
  );
}

export default GooglePay;
