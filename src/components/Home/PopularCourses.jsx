import axios, { Axios } from "axios";
import { Translator, Translate } from "react-auto-translate";
import { Link } from "react-router-dom";
import barzil from "./images/BR Brazil.svg"
import america from "./images/US United States of America (the).svg"
import pakistan from "./images/PK Pakistan.svg"
import india from "./images/IN India.svg"
import russia from "./images/RU Russian Federation (the).svg"
import france from "./images/FR France.svg"
import arabic from "./images/EH Western Sahara.svg"
import spain from "./images/ES Spain.svg"
import "./courses.css"
import { useState, useEffect, useRef } from 'react';
import { Modal, notification } from 'antd';
import google from "./images/google-pay-38 1.png"
import apple from "./images/apple-logo-png-apple-mac-vector-logo-download-23 1.png"
import Successi from "./images/Group 6674.png"
import errir from "./images/Group 6674 (2).png"
import { jwtDecode } from "jwt-decode";
import CustomDropdown from "./CustomDropdown";
import { useSelector } from "react-redux";
import bannerimage from  "./images/Selo.svg"
import GooglePay from "./Googlepay";
import Applepay from "./Applepay";
export default function PopularCourses({ language ,showCancelButton,handleNavigationClick,large,medium }) {
  const userState = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [InitialCourses, setInitialCourses] = useState([]);
  const [localLang, setLocalLang] = useState(language);
  const [cardholderName, setCardholderName] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [zip, setZip] = useState('');
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [purchase, setpurchase] = useState("")
  const [succ, setSucc] = useState(false)
  const [err, setErr] = useState(false)
  const [available, setAvailable] = useState(false)
  const [coulan, setCoulan] = useState("English")
  const [plans, setPlans] = useState([]);
  const [userId, setUserId] = useState(null);
  const [confirmemail, setConfirmemail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [cardCode, setCardCode] = useState("");

  useEffect(() => {
    const personId = localStorage.getItem("userId");
    if (personId) {
      const decoded = jwtDecode(personId);
      setUserId(decoded);  
      setEmail(decoded.Email)  
      setConfirmemail(decoded.Email)
      setBillingAddress(decoded.Address)
      setCardholderName(decoded.Name)  
      setZip(decoded.zip)
      setBillingAddress(decoded.Address)
    }},[])
  const languageOptions = [
    { value: 'English', label: 'English', image: america, planId: null },
    { value: 'Spanish', label: 'Spanish', image: spain, planId: null },
    { value: 'Portuguese', label: 'Portuguese', image: barzil, planId: null },
    { value: 'Russian', label: 'Russian', image: russia, planId: null },
    { value: 'Arabic', label: 'Arabic', image: arabic, planId: null },
    { value: 'Hindi', label: 'Hindi', image: india, planId: null },
    { value: 'French', label: 'French', image: france, planId: null },
    { value: 'Urdu', label: 'Urdu', image: pakistan, planId: null },
  ];
  const visibleModal = () => {
    setSucc(true)
  }
  const errModal = () => {
    setErr(true)
  }
  const availblemodal = () => {
    setAvailable(true)
  }
  const hideModal = () => {
    setSucc(false)
  }
  const hideavailble = () => {
    setAvailable(false)
  }
  const errhideModal = () => {
    setErr(false)
    setModalVisible(true);

  }

  const showModal = async (courseId) => {
    setModalVisible(true);

    setpurchase(courseId)



  };
  const handleCancel = () => {
    setModalVisible(false);
  };


  const openNotification = (type, message) => {
    notification[type]({
      message,
      duration: 3,
    });
  };

  function removeErrorBorder(elementId) {
    const element = document.getElementById(elementId);
    if (element.classList.contains('error-border')) {
      element.classList.remove('error-border');
    }
  }
function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    
    if (isValid) {
        console.log('Email is valid.');
        return true;
    } else {
        console.log('Email is invalid.');
        return false;
    }
}
  const handlePayment = async () => {
    if (!isValidEmail(email)) {
        openNotification("error", "Please enter a valid email address");
        return;
    }
    if (!cardholderName || !email || !billingAddress || !zip) {
      // Handle validation errors
      if (!cardholderName) document.getElementById('cardholderName').classList.add('error-border');
      if (!email) document.getElementById('email').classList.add('error-border');
      if (!billingAddress) document.getElementById('billingAddress').classList.add('error-border');
      if (!zip) document.getElementById('zip').classList.add('error-border');
      if (!confirmemail) document.getElementById('confirmedemail').classList.add('error-border');
      return;
    }
  if(email != confirmemail){
        openNotification("error","Confirm Email must be same")
    return;
  }
    try {
      setLoading(false);
  
      // Create payment intent
      const response = await axios.post('https://server-of-united-eldt.vercel.app/api/create-payment-transactions', {
        amount: purchase.price,
        cardCode,
        cardNumber,
        date,
        courseEnrollments: [
          {
            courseId: purchase._id,
            lessonIndex: 0,
            language: purchase.language || 'English', 
          },
        ],
        fullName: cardholderName,
        Email: email,
        price: purchase.price,
        address: billingAddress,
        zip: zip,
      });
if(response.data.available === true ){
  availblemodal()
  handleCancel()
}
      if(response.data.transactionId.transactionResponse.messages.message[0].code = 1){
        visibleModal()
        handleCancel()
    return
  }

    } catch (error) {
      console.error('Payment error:', error.message);
      errModal();
      handleCancel()
      setModalVisible(false);
    } finally {
      setLoading(true);
    }
  };
  const handleupward = (idofinput) => {
    const screenWidth = window.innerWidth;


};



  const handleLanguageChange = (selectedOption, planId) => {
    // Update language in state
    setCoulan(selectedOption);
    // Find the index of the plan with the specified planId
    const planIndex = plans.findIndex(plan => plan._id === planId);

    if (planIndex !== -1) {
      // Create a copy of the plans array to avoid mutating state directly
      const updatedPlans = [...plans];

      // If language property doesn't exist in the plan, add it
      if (!updatedPlans[planIndex].language) {
        updatedPlans[planIndex].language = selectedOption;
      } else {
        // Update the language of the plan with the specified planId
        updatedPlans[planIndex] = {
          ...updatedPlans[planIndex],
          language: selectedOption,
        };
      }

      // Update the state with the modified plans
      setPlans(updatedPlans);
      console.log(updatedPlans);
    }
  };



  const handleMonthYearChange = (e) => {
    let input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    let formattedDate = '';

    if (input.length <= 2) {
        formattedDate = input;
    } else {
        formattedDate = input.slice(0, 2) + '/' + input.slice(2);
    }

    setDate(formattedDate);
};


useEffect(() => {
  // Load the Google Pay script
  const script = document.createElement('script');
  script.src = 'https://pay.google.com/gp/p/js/pay.js';
  script.async = true;
  document.body.appendChild(script);

  // Cleanup function
  return () => {
    document.body.removeChild(script);
  };
}, []);

const handlePaymentRequest = async () => {
  try {
    const paymentDataRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId',
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: '12345678901234567890',
        merchantName: 'Demo Merchant',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPriceLabel: 'Total',
        totalPrice: '100.00',
        currencyCode: 'USD',
        countryCode: 'US',
      },
    };

    // Open the Google Pay payment sheet
    const paymentResponse = await window.google.payments.api.paymentData.request(paymentDataRequest);

    // Extract the payment token from the payment response
    const paymentToken = paymentResponse.paymentMethodData.tokenizationData.token;

    // Handle the payment token as needed
    console.log('Payment token:', paymentToken);
  } catch (error) {
    console.error('Error processing Google Pay:', error);
  }
};




  useEffect(() => {
    axios.get("https://server-of-united-eldt.vercel.app/api/courses").then((res) => {
      setPlans(res.data);
    });
  }, []);

  


  return (
    <>
      <Translator
        from="en"
        to={language || "en"}
        googleApiKey={process.env.REACT_APP_GOOGLE_TRANSLATE_KEY}
      >
        <div className="imageforbanner">
<img src={bannerimage}  alt="imageofall"/>
        </div>
        <div className="courses-area tw-my-3" id="courses">
          <div className="container ">
            <div className="section-title titleforcards">
              <span className="sub-title ">
                <Translate>Take the course your way</Translate>
              </span>
              <h3 className="tab-title" >
                <Translate>Choose a course in the language of your preference</Translate>
              </h3>
              <span className="sub">
                <Translate>
                  Enjoy high-level learning methods; you are the creator of your own career, and we will guide you every step of the way
                </Translate>
              </span>
            </div>
            <div className="section-title anothertitleforcards">
              <span className="sub-title">
                <Translate>Take the course your way</Translate>
              </span>
              <h3 className="tab-title" >
                <Translate>Choose your course language</Translate>
              </h3>
             
            </div>



          </div>
        </div>




       







        {
          plans.length > 0 ? (
            <>


            
                          <div className="customcard">
                                              <CustomDropdown options={languageOptions} handleLanguageChange={handleLanguageChange} language={language} plans={plans}  large={large} medium={medium} showModal={showModal} showCancelButton={showCancelButton} handleNavigationClick={handleNavigationClick}/>

                          </div>

            </>
          ) : (
            <>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>

                <span>Loading...</span>

              </div>
            </>
          )
        }


        <Modal
          open={modalVisible}
          onCancel={handleCancel}
          className="custom-modal"
          closeIcon={null}
          footer={null} 
         id="mainmodalforpay"
        >
          <div className="mainblack">
            <span className="pricetxt">${purchase.price }.00</span><br></br>
            <span className="description"><span className="categoryi"> {purchase.courseName} </span>
              {
                purchase.language ? (
                  <>({purchase.language})  </>
                ) : (
                  <>(English) </>
                )
              }

                - ELDT Theory certificate
            </span>
          </div>
  

<Applepay/>
          <div className="main-content paymentmodal">
            {/* Your payment form and input fields */}
            <div className="gpay">
            <GooglePay/>
                          <button className="applebtn"><img src={apple} alt="apple" /> PAY</button>
            </div>

      
            <input
  type="text"
  className="form-control fnam"
  id="cardholderName"
  placeholder="Full Name"
  value={userId !== null ? userId.Name : cardholderName}
  readOnly={userId !== null}
  onClick={()=>{handleupward("cardholderName")}}
  onFocus={()=>{handleupward("cardholderName")}}
  onChange={(e) => {
    setCardholderName(e.target.value);
    removeErrorBorder('cardholderName');
  }}
/>
<input
  type="text"
  className="form-control fnam"
  id="email"
  placeholder="Email address"
  value={userId !== null ? userId.Email : email}
  readOnly={userId !== null}
  onClick={()=>{handleupward("email")}}
  onFocus={()=>{handleupward("cardholderName")}}
  onChange={(e) => {
    setEmail(e.target.value.toLowerCase());
    removeErrorBorder('email'); // Call removeErrorBorder to remove error class
  }}
/>
<input
  type="text"
  className="form-control fnam"
  id="confirmedemail"
  placeholder="Confirm Email address"
  value={userId !== null ? userId.Email : confirmemail}
  readOnly={userId !== null}
  onClick={()=>{handleupward("confirmedemail")}}
  onFocus={()=>{handleupward("cardholderName")}}

  onChange={(e) => {
    setConfirmemail(e.target.value.toLowerCase());
  }}
/>

            <label className="labeltext">
              <span className="pasword">Payment information</span>
              <span className="secure"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 5.5H3C2.72386 5.5 2.5 5.72386 2.5 6V13C2.5 13.2761 2.72386 13.5 3 13.5H13C13.2761 13.5 13.5 13.2761 13.5 13V6C13.5 5.72386 13.2761 5.5 13 5.5Z" stroke="#2C292A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.75 5.5V3.25C5.75 2.65326 5.98705 2.08097 6.40901 1.65901C6.83097 1.23705 7.40326 1 8 1C8.59674 1 9.16903 1.23705 9.59099 1.65901C10.0129 2.08097 10.25 2.65326 10.25 3.25V5.5" stroke="#2C292A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
              </svg> Secure</span>
            </label>

            <input className="card-element numcard" onChange={(e) => { setCardNumber(e.target.value) }} placeholder="424242424242424242" />
            <div className="d-flex">
            <input 
            className="card-element numcard2" 
            value={date} 
            onChange={handleMonthYearChange} 
            placeholder="MM / YY" 
            maxLength="5" 
        />
              <input className="card-element numcard3" onChange={(e)=>{setCardCode(e.target.value)}} style={{ width: '100%' }} placeholder="CVV" maxLength="5"/>
            </div>
            {/* Billing address input fields */}
            <label className="labeltext">
              <span className="pasword">Country or region</span>
            </label>
          
            <input
  type="text"
  className="form-control fnam"
  id="billingAddress"
  placeholder="Address"
  value={userId !== null ? userId.Address : billingAddress}
  readOnly={userId !== null}
  onClick={()=>{handleupward("billingAddress")}}
  onFocus={()=>{handleupward("cardholderName")}}
  onChange={(e) => {
    setBillingAddress(e.target.value);
    removeErrorBorder('billingAddress');
  }}
/>

<input
  type="text"
  className="form-control fname"
  placeholder="Zip code"
  id="zip"
  value={userId !== null ? userId.zip : zip}
  readOnly={userId !== null}
  onClick={()=>{handleupward("zip")}}
  onFocus={()=>{handleupward("cardholderName")}}
  onChange={(e) => {
    setZip(e.target.value);
    removeErrorBorder('zip');
  }}
/>
            <div className="termdiv">
              <span className="term"> By continuing, you agree to the  <span className="condition">Terms of service </span></span>
            </div>
            <button className="buybtn" onClick={handlePayment}>
              {
                loading ? (
                  <>
                    Place your order:${purchase.price }.00 USD
                  </>
                ) : (
                  <>
                    Processing...
                  </>
                )
              }
            </button>
          </div>
          <div className="cancel" onClick={handleCancel}>Cancel</div>
        </Modal>

        <Modal
          open={succ}
          onCancel={hideModal}
          closeIcon={null}
          footer={null}
        >
          <div className="mainbody">
            <div className="imgalign">
              <img src={Successi} alt="success" />
            </div>
            <span className="message">Payment successfully processed</span><br></br>
            <span className="exp">Congratulations! You are now part of United. Click the button below to start your studies.</span>
            {
              showCancelButton ?( <Link to="/login"><button className="buybtn">Start Now</button></Link>):( <button onClick={()=>{handleNavigationClick("information")}} className="buybtn">Start Now</button>)
            }
           
            {/* <Link to="/studentdash"><button className="buybtn2">Start Now</button></Link> */}
          </div>
        </Modal>
        <Modal
          open={err}
          onCancel={errhideModal}
          closeIcon={null}
          footer={null}
        >
          <div className="mainbody">
            <div className="imgalign">

              <img src={errir} alt="success" />
            </div>
            <span className="message" style={{ marginTop: "24px" }}>Error processing payment</span><br></br>
            <span className="exp" >Please try again. If the issue persists, contact your card issuer or try using another card.</span>
            <button className="buybtn" onClick={errhideModal}>To try again</button>
          </div>
        </Modal>
        <Modal
          open={available}
          onCancel={hideavailble}
          closeIcon={null}
          footer={null}
        >
          <div className="mainbody">
            <div className="imgalign">

              <img src={errir} alt="success" />
            </div>
            <span className="message" style={{ marginTop: "24px" }}>You have already purchase this course</span><br></br>
            <span className="exp" >Please buy another course or select diffrent language</span>
            <button className="buybtn" onClick={hideavailble}>To try again</button>
          </div>
        </Modal>
      </Translator>
    </>
  );
}
