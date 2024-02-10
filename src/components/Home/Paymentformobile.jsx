import google from "./images/google-pay-38 1.png"
import apple from "./images/apple-logo-png-apple-mac-vector-logo-download-23 1.png"
import Successi from "./images/Group 6674.png"
import errir from "./images/Group 6674 (2).png"
import { jwtDecode } from "jwt-decode";

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
  PaymentRequestButtonElement
} from '@stripe/react-stripe-js';
import CustomDropdown from "./CustomDropdown";
import { useState,useEffect } from "react";
import axios from "axios";
import { Modal, notification } from "antd";
import { Link } from "react-router-dom";
function Paymentformobile ({showCancelButton,handleNavigationClick}){

    const [loading, setLoading] = useState(true);
    const [InitialCourses, setInitialCourses] = useState([]);
    const [courses, setCourses] = useState([]);
    const [cardholderName, setCardholderName] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [zip, setZip] = useState('');
    const [email, setEmail] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [succ, setSucc] = useState(false)
    const [err, setErr] = useState(false)
    const [available, setAvailable] = useState(false)
    const [coulan, setCoulan] = useState("English")
    const [purchase, setpurchase]=useState("")
    const [plans, setPlans] = useState([]);
    const [userId, setUserId] = useState(null);
    const [confirmemail, setConfirmemail] = useState("");
    useEffect(() => {
        const personId = localStorage.getItem("userId");
        const newpurchase = localStorage.getItem("purchase")
        const newPurchaseObject = JSON.parse(newpurchase);
        if(newPurchaseObject){
            setpurchase(newPurchaseObject)
        }
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
          const stripe = useStripe();
          const elements = useElements();
        
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
console.log(purchase)
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
              const response = await axios.post('https://server-of-united-eldt.vercel.app/api/create-payment-intents', {
                amount: purchase.price,
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
          if(response.data.available === true){
            availblemodal()
            return
          }
              if (response.status === 200) {
                // Confirm payment
                const confirmPayment = await stripe.confirmCardPayment(response.data.clientSecret, {
                  payment_method: {
                    card: elements.getElement(CardNumberElement),
                  },
                });
          
                if (confirmPayment.paymentIntent.status === 'succeeded') {
                  // Payment confirmed, now create or update student
                  await axios.post("https://server-of-united-eldt.vercel.app/api/testersuccessuser", {
                    amount: purchase.price,
                    courseEnrollments: [
                      {
                        courseId: purchase._id,
                        lessonIndex: 0,
                        language: purchase.language,
                      },
                    ],
                    fullName: cardholderName,
                    Email: email,
                    price: purchase.price,
                    address: billingAddress,
                    zip: zip,
                  });
          
                  console.log('Payment confirmed');
                  setModalVisible(false);
                  visibleModal();
                } else {
                  throw new Error('Payment failed. Please try again.');
                }
              } else {
                throw new Error('Failed to create payment intent. Please try again.');
              }
            } catch (error) {
              console.error('Payment error:', error.message);
              errModal();
              setModalVisible(false);
            } finally {
              setLoading(true);
            }
          };
    return(
        <>

          <div className="mainblack">
            <span className="pricetxt">${purchase.price / 100}.00</span><br></br>
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
          <div className="main-content paymentmodal">
            {/* Your payment form and input fields */}
            <div className="gpay">
              <button className="gpaybtn"><img src={google} alt="google" /> PAY</button>
              <button className="applebtn"><img src={apple} alt="apple" /> PAY</button>
            </div>

      
            <input
  type="text"
  className="form-control fnam"
  id="cardholderName"
  placeholder="Full Name"
  value={userId !== null ? userId.Name : cardholderName}
  readOnly={userId !== null}

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

            <CardNumberElement className="card-element numcard" />
            <div className="d-flex">
              <CardExpiryElement className="card-element numcard2" />
              <CardCvcElement className="card-element numcard3" style={{ width: '100px' }} />
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
                    Place your order:${purchase.price / 100}.00 USD
                  </>
                ) : (
                  <>
                    Processing...
                  </>
                )
              }
            </button>
          </div>
          
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
            </>
    )
}
export default Paymentformobile;