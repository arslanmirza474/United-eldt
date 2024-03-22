import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import PopularCourses from "../components/Home/PopularCourses";

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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Headerofclassa from "./Headerofclassa";
import Fllowup from "./Fllowup";
import GraduateStudent from "./GraduateStudents";
import Cardforclassa from "./CardforClassa";
import ClassB from "./ClassB";

const stripePromise = loadStripe('pk_test_51O5F9gFZtgAr5eHPPYRptE8ZBDBXAtaLj7XGBnSp106qIqacE80PBnqGyndDPhtDYDpBWNvpJ8YmObgxijiNX22o00C8ueO5lb'); // Replace with your actual public key

function Homeofclassa() {
  const languageState = useSelector((state) => state.language);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="coverformobileversionofclassa">
      <br></br><br></br>

      <Navbar />
      {
        screenWidth <= 500 ?( <>
          <Elements stripe={stripePromise}>
          <MobileHeader showCancelButton={true} /></Elements>
          <div className="coverofrevi">
        {/* <div className="courseltitle2"onClick={scrollToTargetSection} >
Check out our other courses
        </div> */}
        <ReviewSlider />
      </div>


      {/* <Partnerboxes/> */}
      <TitleCarousel />
      <ClassA />
      <div className="mobile_cards">
        <Elements stripe={stripePromise}>
          <PopularCourses language={languageState.language.value} showCancelButton={true} />
        </Elements>

      </div>
      <Footer />
        </>):(  <>
            <Elements stripe={stripePromise}>
            <ClassB/>
              
            </Elements>    
<Footer/>
          

             
          </> )
      }
   
   
      
    
    </div>
  )
}
export default Homeofclassa;