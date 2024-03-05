import React from 'react';

class Googlepay extends React.Component {
  constructor(props) {
    super(props);
    this.paymentRequest = null;
  }

  componentDidMount() {
    this.initializeGooglePay();
  }

  initializeGooglePay = () => {
    if (window.PaymentRequest) {
      this.paymentRequest = this.createPaymentRequest();
      this.paymentRequest.canMakePayment()
        .then((result) => {
          if (result) {
            // Display PaymentRequest dialog on interaction with the existing checkout button
            document.getElementById('buyButton')
              .addEventListener('click', this.onBuyClicked);
          }
        })
        .catch((err) => {
          console.error('canMakePayment() error:', err);
        });
    } else {
      console.error('PaymentRequest API not available.');
    }
  };

  createPaymentRequest = () => {
    const methodData = [{
      supportedMethods: 'https://google.com/pay',
      data: this.getGooglePaymentsConfiguration(),
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

  getGooglePaymentsConfiguration = () => {
    return {
      environment: 'TEST',
      apiVersion: 2,
      apiVersionMinor: 0,
      merchantInfo: {
        merchantName: 'Example Merchant',
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
            'gatewayMerchantId': 'exampleGatewayMerchantId',
          },
        },
      }],
    };
  };

  onBuyClicked = () => {
    if (this.paymentRequest) {
      this.paymentRequest.show()
        .then((response) => {
          // Dismiss payment dialog.
          response.complete('success');
          this.handlePaymentResponse(response);
        })
        .catch((err) => {
          console.error('show() error:', err);
        });
    } else {
      console.error('PaymentRequest is not initialized.');
    }
  };

  handlePaymentResponse = (response) => {
    // Extract and handle payment token
    const paymentToken = response.details.paymentToken;
    console.log('Payment token:', paymentToken);
    // Send the payment token to your backend for further processing
  };

  render() {
    return (
      <div id="checkout">
        <button id="buyButton">Checkout</button>
      </div>
    );
  }
}

export default Googlepay;
