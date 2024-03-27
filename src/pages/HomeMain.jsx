import React, { useState, useEffect, useRef } from "react";
import Banner from "../components/Home/Banner";
import { useSelector } from "react-redux";
import Disclaimer from "../components/Home/Disclaimer";
import PopularCourses from "../components/Home/PopularCourses";
import HomeAboutUs from "../components/Home/HomeAboutUs";
import FeedbackSliderWithFunFacts from "../components/Home/FeedbackSliderWithFunFacts";
import GetInstantCourses from "../components/Home/GetInstantCourses";
import Partner from "../components/Home/Partner";
import NewsLetter from "../components/workWithUs/NewLetter";
import {
  Elements
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { Link } from "react-router-dom";
import ReviewSliderforhome from "./Reviewsliderforhome";

const stripePromise = loadStripe('pk_test_51O5F9gFZtgAr5eHPPYRptE8ZBDBXAtaLj7XGBnSp106qIqacE80PBnqGyndDPhtDYDpBWNvpJ8YmObgxijiNX22o00C8ueO5lb'); // Replace with your actual public key

export default function HomeMain() {
  const languageState = useSelector((state) => state.language);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (

    <>

      <Banner language={languageState.language.value} />
      <div >
        <Elements stripe={stripePromise}>
          <PopularCourses id="targetSection" language={languageState.language.value} showCancelButton={true} />
        </Elements>
      </div>


      <HomeAboutUs language={languageState.language.value} />
      <Disclaimer language={languageState.language.value} />
{
  windowWidth <= 1440 ?(
<ReviewSliderforhome/>
  ):(      <FeedbackSliderWithFunFacts language={languageState.language.value} />
  )
}

      {/* <NewsLetter language={languageState.language.value} /> */}
    </>

  );
}
