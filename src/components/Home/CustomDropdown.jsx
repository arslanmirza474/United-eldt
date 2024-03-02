import React, { useEffect, useState,useRef } from 'react';
import { Translator, Translate } from "react-auto-translate";
import { motion } from 'framer-motion';
import imageflags from "./images/Frame 6707.png"
import { Avatar } from 'antd';
import { Carousel } from 'antd';
import { Select } from 'antd';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Option } = Select;
function CustomSelect({ options, handleLanguageChange,language,plans,showModal,large,medium,showCancelButton,handleNavigationClick }) {
  const [errorPlanId, setErrorPlanId] = useState(null);


 
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: false,
    dotsClass: 'custom-dots',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1.3, // Show a bit of the previous and next cards
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.3, // Show a bit of the previous and next cards
          slidesToScroll: 1
        }
      }
    ]
  };
  
  


  

 
  const handleOptionSelect = (option, index, planId) => {
    
    handleLanguageChange(option, planId);
  };
  

  const handleClickBuyNow = (planId) => {
    console.log("hello")
    const plan = plans.find(plan => plan._id === planId);
    console.log(plan)
    if (!plan?.language) {
        setErrorPlanId(planId);
    } else {
        setErrorPlanId(null);
        showModal(plan);
    }
};
  return (
    <>
     <Translator
        from="en"
        to={language || "en"}
        googleApiKey={process.env.REACT_APP_GOOGLE_TRANSLATE_KEY}
      >
   
<div className='navigator' >
        <button className="nextbtnfor"  onClick={previous}>
        <i class="fa-solid fa-angle-left"></i>
        </button>
        <button className="nextbtnfor2" onClick={next}>
        <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>   
<div className='container maincontentslider'> 
 
<Slider  ref={slider => {
          sliderRef = slider;
        }}
        {...settings} >
                        {plans.map((plan, index) => (
                        <div
                        key={plan._id}
                        className=" card-content mx-auto " 
                      >  <div className='mainconofslider' >  
                        <div className="plancard d-flex mt-2">
                          <img src={plan.image} height="58px" alt="plan1" />
                          <span className="flex-end">


                            <sup className="dollar-sup">$</sup>
                            <span className="main-price"> <Translate>{plan.price}</Translate></span>
                          </span>
                        </div>


                        <span className="classer">  <Translate>{plan.courseName}</Translate></span>
                        <div className="d-flex toper">
                          <div className="categoria">


                            <span> <Translate>Category </Translate></span>
                            <br></br>

                            <strong className="strongcontent">  <Translate>{plan.category}</Translate></strong>
                          </div>
                          <div className="categoria2">


<span> <Translate>Last update </Translate></span>
<br></br>

<strong className="strongcontent">  <Translate>07/07/2023</Translate></strong>
</div>

                        </div>
<div className='imageofallflags'>
<img src={imageflags} alt='image'/>
</div>

    <Select
            style={{ width: "100%",borderRadius:"7px",border:"1px solid #D2D2D2",height:"48px" ,display:"flex"}}
            defaultValue=""
            popupClassName="custom-dropdown"
            listHeight="416px"
            popupMatchSelectWidth // Set dropdown to match width of select
            dropdownPlacement="bottomLeft"
            placement="bottomLeft" 
            dropdownStyle={{ maxHeight: "500px", overflowY: "hidden" }} 
            onChange={(value) => handleOptionSelect(value,index, plan._id)}
            onFocus={(e) => e.target.style.boxShadow = "transparent"} // Remove blue border on focus
            onBlur={(e) => e.target.style.borderColor = "#D2D2D2"} 
          >
            <Option className="justify-content-center" value="">
              <Avatar /> Select language
            </Option>
            {options.map((option) => (
        <Option key={option.value} value={option.label}>
          <img src={option.image} alt={option.label} className="language-image" />
          <span>{option.label}</span>
        </Option>
      ))}
            {/* Render other language options here */}
          </Select>
          {errorPlanId === plan._id && !plan.language && (
                                        <div className="error-message"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#FE2727" stroke-width="1.5" stroke-miterlimit="10"/>
                                        <path d="M8 5V8.5" stroke="#FE2727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8 11.5C8.41421 11.5 8.75 11.1642 8.75 10.75C8.75 10.3358 8.41421 10 8 10C7.58579 10 7.25 10.3358 7.25 10.75C7.25 11.1642 7.58579 11.5 8 11.5Z" fill="#FE2727"/>
                                      </svg>   <span className='mx-2'>Please select a language</span></div>
                                    )}
<div className='Iconscovers'>
  <div className="toper   Acesso">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
  >
    <path
      d="M12 21.8086C16.9706 21.8086 21 17.7792 21 12.8086C21 7.83803 16.9706 3.80859 12 3.80859C7.02944 3.80859 3 7.83803 3 12.8086C3 17.7792 7.02944 21.8086 12 21.8086Z"
      stroke="#FBB723"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 7.55859V12.8086H17.25"
      stroke="#FBB723"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>{" "}
  <span className="mx-2"><Translate>Access:</Translate><strong className="strong-text"> Unlimited</strong> </span>
</div>
<div className="mt-3  Acesso">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
  >
    <path
      d="M12 17.3086C16.1421 17.3086 19.5 13.9507 19.5 9.80859C19.5 5.66646 16.1421 2.30859 12 2.30859C7.85786 2.30859 4.5 5.66646 4.5 9.80859C4.5 13.9507 7.85786 17.3086 12 17.3086Z"
      stroke="#FBB723"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 14.3086C14.4853 14.3086 16.5 12.2939 16.5 9.80859C16.5 7.32331 14.4853 5.30859 12 5.30859C9.51472 5.30859 7.5 7.32331 7.5 9.80859C7.5 12.2939 9.51472 14.3086 12 14.3086Z"
      stroke="#FBB723"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 15.8086V23.3086L12 21.0586L7.5 23.3086V15.8086"
      stroke="#FBB723"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>{" "}
  <span  className="mx-2"><Translate>TPR Certified:</Translate><strong className="strong-text"> Yes</strong> </span>
</div>
</div>



<button
                                className="buy-button"
                                style={{ marginTop: "40px" }}
                                onClick={() => handleClickBuyNow(plan._id)}
                            >
                                <Translate>Buy Now</Translate>
                            </button>
                            </div>
</div>
))}
  



       
</Slider>

</div>
     
</Translator>       
    </>
   
  );
}

export default CustomSelect;
