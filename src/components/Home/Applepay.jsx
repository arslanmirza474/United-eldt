import React from 'react';

class Applepay extends React.Component {
  componentDidMount() {
    // Load the Apple Pay SDK script dynamically
    const script = document.createElement('script');
    script.src = 'https://applepay.cdn-apple.com/jsapi/v1.1.0/apple-pay-sdk.js';
    script.async = true;
    document.body.appendChild(script);
  }

  startApplePaySession = () => {
    // Ensure ApplePaySession is defined before using it
    if (window.ApplePaySession) {
      // Your Apple Pay session code goes here
      console.log('Apple Pay session started.');
    } else {
      console.error('Apple Pay SDK is not available.');
    }
  }

  render() {
    return (
      <div>
       
        <apple-pay-button 
          id="applePayButton" 
          buttonstyle="black" 
          type="buy" 
          locale="el-GR"
          onClick={this.startApplePaySession}
        >Button</apple-pay-button>
      </div>
    );
  }
}

export default Applepay;
