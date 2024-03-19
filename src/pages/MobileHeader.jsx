import Videoimage from "./Reviews/VideoForMobile.png"
import { useState, useRef, useEffect } from "react";
import barzil from "../components/Home/images/BR Brazil.svg"
import america from "../components/Home/images/US United States of America (the).svg"
import pakistan from "../components/Home/images/PK Pakistan.svg"
import india from "../components/Home/images/IN India.svg"
import russia from "../components/Home/images/RU Russian Federation (the).svg"
import france from "../components/Home/images/FR France.svg"
import arabic from "../components/Home/images/EH Western Sahara.svg"
import spain from "../components/Home/images/ES Spain.svg"
import { Select, Avatar, Modal, notification } from 'antd';
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import errir from "../components/Home/images/Group 6674 (2).png"
import Successi from "../components/Home/images/Group 6674.png"
import { Link } from "react-router-dom";
import Googlepay from "../components/Home/Googlepay";
import google from "./Reviews/Google.svg"
const { Option } = Select;

function MobileHeader({ showCancelButton }) {
  const [modalVisible, setModalVisible] = useState(false);
  const videoRef = useRef(null);
  const [modalVisi, setModalVisi] = useState(false);
  const handleOpenModal = () => {
    setModalVisi(true);
  };

  const handleCloseModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    // Call the parent component's close modal function
    setModalVisi(false);
  };
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
  const handleLanguageChange = (selectedOption, planId) => {
    // Update language in state
    // Find the index of the plan with the specified planId
    console.log(selectedOption)
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
      setErrorPlanId(false);
    }
  };
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios.get("https://server-of-united-eldt.vercel.app/api/courses").then((res) => {
      setPlans(res.data);
    });
  }, []);







  const [errorPlanId, setErrorPlanId] = useState(false);

  const handleClickBuyNow = () => {
    if (!plans[0]?.language) {
      setErrorPlanId(true);
    } else {
      setErrorPlanId(false);
      showModal();
    }
  };




  const [loading, setLoading] = useState(true);
  const [cardholderName, setCardholderName] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [zip, setZip] = useState('');
  const [email, setEmail] = useState('');
  const [purchase, setpurchase] = useState("")
  const [succ, setSucc] = useState(false)
  const [err, setErr] = useState(false)
  const [available, setAvailable] = useState(false)
  const [coulan, setCoulan] = useState("English")
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
    }
  }, [])

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

  const showModal = async () => {
    setModalVisible(true);
    setpurchase(plans[0])
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
    if (email != confirmemail) {
      openNotification("error", "Confirm Email must be same")
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
      if (response.data.available === true) {
        availblemodal()
        handleCancel()
      }
      if (response.data.transactionId.transactionResponse.messages.message[0].code = 1) {
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






  return (
    <>
      <div className="coverofclassvideo" onClick={handleOpenModal}>

        <img src={Videoimage} alt="Video" />
        <div className="animation-container">
          <svg className="svg1" xmlns="http://www.w3.org/2000/svg" width="75" height="74" viewBox="0 0 75 74" fill="none">
            <path d="M37.7471 61C51.0019 61 61.7471 50.2548 61.7471 37C61.7471 23.7452 51.0019 13 37.7471 13C24.4922 13 13.7471 23.7452 13.7471 37C13.7471 50.2548 24.4922 61 37.7471 61Z" fill="#FBB723" stroke="#FBB723" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M45.7471 37L33.7471 29V45L45.7471 37Z" stroke="#FDFDFD" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <svg className="svg2" xmlns="http://www.w3.org/2000/svg" width="75" height="74" viewBox="0 0 75 74" fill="none">
            <path d="M37.7471 61C51.0019 61 61.7471 50.2548 61.7471 37C61.7471 23.7452 51.0019 13 37.7471 13C24.4922 13 13.7471 23.7452 13.7471 37C13.7471 50.2548 24.4922 61 37.7471 61Z" fill="#FBB723" stroke="#FBB723" stroke-width="2.4" stroke-miterlimit="10" />
            <path d="M37.7468 73.8002C58.0709 73.8002 74.5468 57.3243 74.5468 37.0002C74.5468 16.6761 58.0709 0.200195 37.7468 0.200195C17.4227 0.200195 0.946777 16.6761 0.946777 37.0002C0.946777 57.3243 17.4227 73.8002 37.7468 73.8002Z" fill="#FBB723" fill-opacity="0.5" />
            <path d="M45.7471 37L33.7471 29V45L45.7471 37Z" stroke="#FDFDFD" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span className="learntext">Learn More</span>
        </div>
      </div>
      <div className="classacard">
        <div className="headerofclassa">
          <span className="classtitle">
            Class A
          </span>
          <div className="reviewsectionclass">
            <div className="startsreview">
              <img src={google} alt="google" />
            </div>
            <div className="startsreview">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                <g clip-path="url(#clip0_3693_14062)">
                  <path d="M5.1942 8.69694L7.28498 9.81603L7.33347 9.83737C7.6884 9.97119 8.02393 9.94404 8.278 9.71712C8.51656 9.50377 8.60384 9.19733 8.55341 8.84628L8.2043 6.43355L9.78305 4.77333C10.0585 4.49599 10.1651 4.15463 10.072 3.79777C9.96925 3.40211 9.63565 3.17325 9.15272 3.09761L7.05418 2.78147L5.95642 0.504498C5.78575 0.182542 5.5181 -0.00752932 5.1845 0.000228676C4.85673 0.00992617 4.59683 0.209695 4.39319 0.568502L3.33034 2.79505L0.97773 3.12282C0.603407 3.18682 0.327998 3.38271 0.217447 3.70661C0.106895 4.03051 0.211629 4.35828 0.494795 4.69188L2.20349 6.43548L1.81947 8.84628C1.75935 9.26327 1.83111 9.59299 2.1104 9.79082C2.36059 9.96731 2.67479 9.96731 3.03748 9.84318L3.0976 9.81797L5.1942 8.69694Z" fill="#FBB723" />
                </g>
                <defs>
                  <clipPath id="clip0_3693_14062">
                    <rect width="9.93023" height="9.93023" fill="white" transform="matrix(-1 0 0 1 10.105 0)" />
                  </clipPath>
                </defs>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                <g clip-path="url(#clip0_3693_14062)">
                  <path d="M5.1942 8.69694L7.28498 9.81603L7.33347 9.83737C7.6884 9.97119 8.02393 9.94404 8.278 9.71712C8.51656 9.50377 8.60384 9.19733 8.55341 8.84628L8.2043 6.43355L9.78305 4.77333C10.0585 4.49599 10.1651 4.15463 10.072 3.79777C9.96925 3.40211 9.63565 3.17325 9.15272 3.09761L7.05418 2.78147L5.95642 0.504498C5.78575 0.182542 5.5181 -0.00752932 5.1845 0.000228676C4.85673 0.00992617 4.59683 0.209695 4.39319 0.568502L3.33034 2.79505L0.97773 3.12282C0.603407 3.18682 0.327998 3.38271 0.217447 3.70661C0.106895 4.03051 0.211629 4.35828 0.494795 4.69188L2.20349 6.43548L1.81947 8.84628C1.75935 9.26327 1.83111 9.59299 2.1104 9.79082C2.36059 9.96731 2.67479 9.96731 3.03748 9.84318L3.0976 9.81797L5.1942 8.69694Z" fill="#FBB723" />
                </g>
                <defs>
                  <clipPath id="clip0_3693_14062">
                    <rect width="9.93023" height="9.93023" fill="white" transform="matrix(-1 0 0 1 10.105 0)" />
                  </clipPath>
                </defs>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                <g clip-path="url(#clip0_3693_14062)">
                  <path d="M5.1942 8.69694L7.28498 9.81603L7.33347 9.83737C7.6884 9.97119 8.02393 9.94404 8.278 9.71712C8.51656 9.50377 8.60384 9.19733 8.55341 8.84628L8.2043 6.43355L9.78305 4.77333C10.0585 4.49599 10.1651 4.15463 10.072 3.79777C9.96925 3.40211 9.63565 3.17325 9.15272 3.09761L7.05418 2.78147L5.95642 0.504498C5.78575 0.182542 5.5181 -0.00752932 5.1845 0.000228676C4.85673 0.00992617 4.59683 0.209695 4.39319 0.568502L3.33034 2.79505L0.97773 3.12282C0.603407 3.18682 0.327998 3.38271 0.217447 3.70661C0.106895 4.03051 0.211629 4.35828 0.494795 4.69188L2.20349 6.43548L1.81947 8.84628C1.75935 9.26327 1.83111 9.59299 2.1104 9.79082C2.36059 9.96731 2.67479 9.96731 3.03748 9.84318L3.0976 9.81797L5.1942 8.69694Z" fill="#FBB723" />
                </g>
                <defs>
                  <clipPath id="clip0_3693_14062">
                    <rect width="9.93023" height="9.93023" fill="white" transform="matrix(-1 0 0 1 10.105 0)" />
                  </clipPath>
                </defs>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                <g clip-path="url(#clip0_3693_14062)">
                  <path d="M5.1942 8.69694L7.28498 9.81603L7.33347 9.83737C7.6884 9.97119 8.02393 9.94404 8.278 9.71712C8.51656 9.50377 8.60384 9.19733 8.55341 8.84628L8.2043 6.43355L9.78305 4.77333C10.0585 4.49599 10.1651 4.15463 10.072 3.79777C9.96925 3.40211 9.63565 3.17325 9.15272 3.09761L7.05418 2.78147L5.95642 0.504498C5.78575 0.182542 5.5181 -0.00752932 5.1845 0.000228676C4.85673 0.00992617 4.59683 0.209695 4.39319 0.568502L3.33034 2.79505L0.97773 3.12282C0.603407 3.18682 0.327998 3.38271 0.217447 3.70661C0.106895 4.03051 0.211629 4.35828 0.494795 4.69188L2.20349 6.43548L1.81947 8.84628C1.75935 9.26327 1.83111 9.59299 2.1104 9.79082C2.36059 9.96731 2.67479 9.96731 3.03748 9.84318L3.0976 9.81797L5.1942 8.69694Z" fill="#FBB723" />
                </g>
                <defs>
                  <clipPath id="clip0_3693_14062">
                    <rect width="9.93023" height="9.93023" fill="white" transform="matrix(-1 0 0 1 10.105 0)" />
                  </clipPath>
                </defs>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                <g clip-path="url(#clip0_3693_14062)">
                  <path d="M5.1942 8.69694L7.28498 9.81603L7.33347 9.83737C7.6884 9.97119 8.02393 9.94404 8.278 9.71712C8.51656 9.50377 8.60384 9.19733 8.55341 8.84628L8.2043 6.43355L9.78305 4.77333C10.0585 4.49599 10.1651 4.15463 10.072 3.79777C9.96925 3.40211 9.63565 3.17325 9.15272 3.09761L7.05418 2.78147L5.95642 0.504498C5.78575 0.182542 5.5181 -0.00752932 5.1845 0.000228676C4.85673 0.00992617 4.59683 0.209695 4.39319 0.568502L3.33034 2.79505L0.97773 3.12282C0.603407 3.18682 0.327998 3.38271 0.217447 3.70661C0.106895 4.03051 0.211629 4.35828 0.494795 4.69188L2.20349 6.43548L1.81947 8.84628C1.75935 9.26327 1.83111 9.59299 2.1104 9.79082C2.36059 9.96731 2.67479 9.96731 3.03748 9.84318L3.0976 9.81797L5.1942 8.69694Z" fill="#FBB723" />
                </g>
                <defs>
                  <clipPath id="clip0_3693_14062">
                    <rect width="9.93023" height="9.93023" fill="white" transform="matrix(-1 0 0 1 10.105 0)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="reviewcount">
              7,458 reviews
            </div>

          </div>
        </div>
        <div className="coverofpricebuttons">
          <div className="button_a">
            50% OFF
          </div> <svg xmlns="http://www.w3.org/2000/svg" width="85" height="2" viewBox="0 0 85 2" fill="none">
            <path d="M85 1L2.86102e-06 1" stroke="url(#paint0_linear_3693_14084)" />
            <defs>
              <linearGradient id="paint0_linear_3693_14084" x1="6.35906e-07" y1="1.50005" x2="77.6953" y2="1.49995" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF3030" />
                <stop offset="1" stop-color="#FF3030" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="priceofc">

            $100.00
          </div>
        </div>
        <div className="Main_price_area" style={{ marginTop: "30px" }}>
          $50.00
        </div>
        <div className='selectedtest'>Select your language:</div>

        <Select
          style={{ width: "100%", borderRadius: "7px", border: "1px solid #D2D2D2", height: "48px", display: "flex" }}
          defaultValue=""
          popupClassName="custom-dropdown"
          listHeight="416px"
          popupMatchSelectWidth // Set dropdown to match width of select
          dropdownPlacement="bottomLeft"
          placement="bottomLeft"
          dropdownStyle={{ maxHeight: "500px", overflowY: "hidden" }}
          onChange={(value) => handleLanguageChange(value, plans[0]._id)}
          onFocus={(e) => e.target.style.boxShadow = "transparent"} // Remove blue border on focus
          onBlur={(e) => e.target.style.borderColor = "#D2D2D2"}
          suffixIcon={<svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
            <path d="M14.9141 6.75L9.28906 12.375L3.66406 6.75" stroke="#2C292A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>}
        >
          <Option className="justify-content-center" value="">
            <Avatar /> Select Language
          </Option>
          {languageOptions.map((option) => (
            <Option key={option.value} value={option.label}>
              <img src={option.image} alt={option.label} width="24px" height="24px" className="language-image" />
              <span>{option.label}</span>
            </Option>
          ))}
          {/* Render other language options here */}
        </Select>
        {errorPlanId ? (
          <div className="error-message">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#FE2727" stroke-width="1.5" stroke-miterlimit="10" />
              <path d="M8 5V8.5" stroke="#FE2727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 11.5C8.41421 11.5 8.75 11.1642 8.75 10.75C8.75 10.3358 8.41421 10 8 10C7.58579 10 7.25 10.3358 7.25 10.75C7.25 11.1642 7.58579 11.5 8 11.5Z" fill="#FE2727" />
            </svg>
            <span className='mx-2'>Please select a language</span>
          </div>
        ) : null}

        <button
          className="buy-button"
          style={{ marginTop: "40px" }}
          onClick={handleClickBuyNow}

        >
          Buy Now
        </button>
        <div className="certificationbtn">
          <div className="certified">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M12.5 16.5C16.6421 16.5 20 13.1421 20 9C20 4.85786 16.6421 1.5 12.5 1.5C8.35786 1.5 5 4.85786 5 9C5 13.1421 8.35786 16.5 12.5 16.5Z" stroke="#FBB723" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.5 13.5C14.9853 13.5 17 11.4853 17 9C17 6.51472 14.9853 4.5 12.5 4.5C10.0147 4.5 8 6.51472 8 9C8 11.4853 10.0147 13.5 12.5 13.5Z" stroke="#FBB723" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17 15V22.5L12.5 20.25L8 22.5V15" stroke="#FBB723" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg> FMCSA Certified
          </div>
          <div className="certified">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path d="M12.5 21C17.4706 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3C7.52944 3 3.5 7.02944 3.5 12C3.5 16.9706 7.52944 21 12.5 21Z" stroke="#FBB723" stroke-width="1.5" stroke-miterlimit="10" />
              <path d="M12.5 6.75V12H17.75" stroke="#FBB723" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg> Unlimited Access
          </div>
        </div>
        <div className="watchdetail" onClick={handleOpenModal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
            <path d="M13.5 21.6729C18.0563 21.6729 21.75 17.9792 21.75 13.4229C21.75 8.8665 18.0563 5.17285 13.5 5.17285C8.94365 5.17285 5.25 8.8665 5.25 13.4229C5.25 17.9792 8.94365 21.6729 13.5 21.6729Z" fill="#FBB723" stroke="#FBB723" stroke-width="0.825" stroke-miterlimit="10" />
            <path d="M13.5001 26.0725C20.4865 26.0725 26.1501 20.4089 26.1501 13.4225C26.1501 6.43606 20.4865 0.772461 13.5001 0.772461C6.5137 0.772461 0.850098 6.43606 0.850098 13.4225C0.850098 20.4089 6.5137 26.0725 13.5001 26.0725Z" fill="#FBB723" fill-opacity="0.5" />
            <path d="M16.25 13.4229L12.125 10.6729V16.1729L16.25 13.4229Z" stroke="#FDFDFD" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" />
          </svg> Learn More
        </div>

      </div>





      <Modal
        open={modalVisi}
        onCancel={handleCloseModal}
        footer={null}
        width="90vw" // Adjusted width to 80% of the viewport width
        style={{ padding: 0, borderRadius: 0, background: "black" }} // Removed padding and border radius
        closeIcon={false}
        bodyStyle={{ padding: 0, background: "black" }} // Removed padding for the modal body
      >
        <video controls width="100%" height="auto" autoPlay ref={videoRef}>
          {/* Adjusted video size */}
          <source src="https://res.cloudinary.com/dezhgxayn/video/upload/v1710514955/copy_046EFCFA-73BA-49A8-B54B-345B18DCC9DF_dygfrf.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal>

      <Modal
        open={modalVisible}
        onCancel={handleCancel}
        className="custom-modal"
        closeIcon={null}
        footer={null}
        id="mainmodalforpay"
      >
        <div className="mainblack">
          <span className="pricetxt">${purchase.price}.00</span><br></br>
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

        {/* <Elements stripe={stripePromise}>
            <Applepay/>
          </Elements> */}
        <Googlepay purchase={plans[0]} cardholderName={cardholderName} />
        <div className="main-content paymentmodal">



          <input
            type="text"
            className=" fnam"
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
            className=" fnam"
            id="email"
            placeholder="Email address"
            value={userId !== null ? userId.Email : email}
            readOnly={userId !== null}
            onClick={() => { handleupward("email") }}
            onFocus={() => { handleupward("cardholderName") }}
            onChange={(e) => {
              setEmail(e.target.value.toLowerCase());
              removeErrorBorder('email'); // Call removeErrorBorder to remove error class
            }}
          />
          <input
            type="text"
            className="fnam"
            id="confirmedemail"
            placeholder="Confirm Email address"
            value={userId !== null ? userId.Email : confirmemail}
            readOnly={userId !== null}
            onClick={() => { handleupward("confirmedemail") }}
            onFocus={() => { handleupward("cardholderName") }}

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
            <input className="card-element numcard3" onChange={(e) => { setCardCode(e.target.value) }} style={{ width: '100%' }} placeholder="CVV" maxLength="5" />
          </div>
          {/* Billing address input fields */}
          <label className="labeltext">
            <span className="pasword">Country or region</span>
          </label>

          <input
            type="text"
            className=" fnam"
            id="billingAddress"
            placeholder="Address"
            value={userId !== null ? userId.Address : billingAddress}
            readOnly={userId !== null}
            onClick={() => { handleupward("billingAddress") }}
            onFocus={() => { handleupward("cardholderName") }}
            onChange={(e) => {
              setBillingAddress(e.target.value);
              removeErrorBorder('billingAddress');
            }}
          />

          <input
            type="text"
            className=" fnam"
            placeholder="Zip code"
            id="zip"
            value={userId !== null ? userId.zip : zip}
            readOnly={userId !== null}
            onClick={() => { handleupward("zip") }}
            onFocus={() => { handleupward("cardholderName") }}
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
                  Place your order: ${purchase.price}.00 USD
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

          <Link to="/login"><button className="buybtn">Start Now</button></Link>


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
export default MobileHeader;