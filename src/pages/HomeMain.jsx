import React, { useState, useEffect,useRef } from "react";
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
import ClassA from "./ClassA";
import TitleCarousel from "./TitleCaoursel";
import Partnerboxes from "./Partnerboxes";
import ReviewSlider from "./ReviewSlider";
import MobileHeader from "./MobileHeader";
import { Link } from "react-router-dom";

const stripePromise = loadStripe('pk_test_51O5F9gFZtgAr5eHPPYRptE8ZBDBXAtaLj7XGBnSp106qIqacE80PBnqGyndDPhtDYDpBWNvpJ8YmObgxijiNX22o00C8ueO5lb'); // Replace with your actual public key

export default function HomeMain() {
  const languageState = useSelector((state) => state.language);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 500);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on component unmount
    };
  }, []);
  const targetSectionRef = useRef(null);

  const scrollToTargetSection = () => {
    console.log("clicked")
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  
  return (
    <>
      
      {isSmallScreen ? (
        <>
        
        <br></br><br></br>

        <Elements stripe={stripePromise}>
        <MobileHeader showCancelButton={true}/></Elements>
        <div className="coverofrevi">
          {/* <div className="courseltitle2"onClick={scrollToTargetSection} >
        Check out our other courses
                </div> */}
        <ReviewSlider  scrollToTargetSection={scrollToTargetSection}/>
        </div>
        

        {/* <Partnerboxes/> */}
        <TitleCarousel/>
        <ClassA/>
        <div className="mobile_cards" ref={targetSectionRef} id="targetSection">
             <Elements stripe={stripePromise}>
          <PopularCourses  language={languageState.language.value}  showCancelButton={true} />
        </Elements>
        </div>
        </>
      ) : (
        <>
        <Banner language={languageState.language.value} />
         <Elements stripe={stripePromise}>
          <PopularCourses id="targetSection" language={languageState.language.value}  showCancelButton={true} />
        </Elements>
        
        <Disclaimer language={languageState.language.value} />
      <HomeAboutUs language={languageState.language.value} />
      <FeedbackSliderWithFunFacts language={languageState.language.value} />
      <NewsLetter language={languageState.language.value} />
        </>

        // Render content for large screens
       
      )}
      
    </>
  );
}
