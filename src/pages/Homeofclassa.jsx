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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const stripePromise = loadStripe('pk_test_51O5F9gFZtgAr5eHPPYRptE8ZBDBXAtaLj7XGBnSp106qIqacE80PBnqGyndDPhtDYDpBWNvpJ8YmObgxijiNX22o00C8ueO5lb'); // Replace with your actual public key

function Homeofclassa (){
    const languageState = useSelector((state) => state.language);  
    return(
        <div className="coverformobileversionofclassa">
          <br></br><br></br>
<Navbar/>
<Elements stripe={stripePromise}>
<MobileHeader showCancelButton={true}/></Elements>
<div className="coverofrevi">
  {/* <div className="courseltitle2"onClick={scrollToTargetSection} >
Check out our other courses
        </div> */}
<ReviewSlider />
</div>


{/* <Partnerboxes/> */}
<TitleCarousel/>
<ClassA/>
<div className="mobile_cards">
     <Elements stripe={stripePromise}>
  <PopularCourses  language={languageState.language.value}  showCancelButton={true} />
</Elements>

</div>
<Footer/>
        </div>
    )
}
export default Homeofclassa ;