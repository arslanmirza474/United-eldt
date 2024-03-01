import React, { useEffect, useState,useRef } from 'react';
import { Translator, Translate } from "react-auto-translate";
import { motion } from 'framer-motion';
import imageflags from "./images/Frame 6707.png"
import { Avatar } from 'antd';
function CustomSelect({ options, handleLanguageChange,language,plans,showModal,large,medium,showCancelButton,handleNavigationClick }) {
  const [visibleItems, setVisibleItems] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [largescreen, setLargescreen] = useState(large);
  const [mediumscreen, setMediumscreen] = useState(medium);
  const [dropdownStates, setDropdownStates] = useState([]);
  const [touchPosition, setTouchPosition] = useState(null);
  const [errorPlanId, setErrorPlanId] = useState(null);


  useEffect(() => {
    const handleTouchStart = (e) => {
      const touchDown = e.touches[0].clientX;
      setTouchPosition(touchDown);
    };

    const handleTouchMove = (e) => {
      if (!touchPosition) {
        return;
      }

      const currentTouch = e.touches[0].clientX;
      const diff = touchPosition - currentTouch;

      if (diff > 5) {
        showNextItem();
      }

      if (diff < -5) {
        showPreviousItem();
      }

      setTouchPosition(null);
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  });
  useEffect(() => {
    const updateVisibleItems = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1920) {
        setVisibleItems(largescreen);
      } else if (screenWidth >= 1440) {
        setVisibleItems(mediumscreen);
      } else if (screenWidth >= 1080) {
        setVisibleItems(2);
      } else if (screenWidth >= 786) {
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
      }
  
      // Adjust startIndex if it exceeds the number of plans
      if (startIndex + visibleItems > plans.length) {
        setStartIndex(plans.length - visibleItems);
      }
    };
  
    updateVisibleItems();
  
    const handleResize = () => {
      updateVisibleItems();
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [startIndex, visibleItems, plans.length]);
  
  
  useEffect(() => {
    const initialDropdownState = plans.map((plan) => {
      // Find the option whose value matches plan.language
      const selectedOption = options.find(option => option.value === plan.language) || options[0];
      
      return {
        isOpen: false,
        selectedOption: selectedOption
      };
    });
    setDropdownStates(initialDropdownState);
  }, [plans, options]);
  
  
  
  

  const handleClickOutside = (event, index) => {
    const dropdownContainers = document.querySelectorAll('.card-content');
    dropdownContainers.forEach((container, idx) => {
      if (index === idx && !container.contains(event.target)) {
        setDropdownStates(prevStates => {
          const updatedStates = [...prevStates];
          updatedStates[index].isOpen = false;
          return updatedStates;
        });
      }
    });
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      dropdownStates.forEach((state, index) => {
        handleClickOutside(event, index);
      });
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dropdownStates]);

  const toggleDropdown = (index) => {
    setDropdownStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index].isOpen = !updatedStates[index].isOpen;
      return updatedStates;
    });
  };


 
  const handleOptionSelect = (option, index, planId) => {
    
    setDropdownStates(prevStates => {
      const updatedStates = [...prevStates];
      updatedStates[index] = {
      
        isOpen: false // Close the dropdown after selecting an option
      };
      return updatedStates;
    });
    handleLanguageChange(option, planId);
  };
  
  const showNextItem = () => {
    if (startIndex + visibleItems < plans.length) {
      setStartIndex(startIndex + 1);
    }
  };
  
  const showPreviousItem = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  
  

  const showItem = (index) => {
    setStartIndex(index);
  };

  const handleClickBuyNow = (planId) => {
    const plan = plans.find(plan => plan._id === planId);
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
       <div className='navigationbtn'>
    <button 
      className="nextbtns" 
      onClick={showPreviousItem} 
      disabled={startIndex === 0}>
        <i class="fa-solid fa-angle-left"></i>
    </button>
    <button 
      className='prebtns' 
      onClick={showNextItem} 
      disabled={startIndex >= plans.length - visibleItems}>
        <i class="fa-solid fa-angle-right"></i>
    </button>
  </div>
<div className='customslider'>
  <div className='container maincontentslider'>
            <div className='mainconofslider' >                {plans.slice(startIndex, startIndex + visibleItems).map((plan, index) => (
                        <motion.div
                        key={plan._id}
                        className=" card-content mx-auto "
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                      >
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
                        <div className="dropdown toper2" >
                          <Translate>Select the desired language:</Translate><br></br>
                          <div className="custom-select mt-2">
                          <div className="selected-option" onClick={() => toggleDropdown(index)}>
                                        <div>
                                           {plan.language ?
                                            <>
                                                <img src={options.find(option => option.value === plan.language)?.image} alt={plan.language} className="language-image" />
                                                <span className='mx-2'>{plan.language}</span>
                                            </>
                                            :
                                            <>
<Avatar/>                                                                                        <span className='mx-2'><Translate>Select language</Translate></span>

                                            </>
                                        }
                                        </div>
                                       
                                        <i className="fa-solid fa-angle-down downicon"></i>
                                    </div>
                                    {errorPlanId === plan._id && !plan.language && (
                                        <div className="error-message"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#FE2727" stroke-width="1.5" stroke-miterlimit="10"/>
                                        <path d="M8 5V8.5" stroke="#FE2727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8 11.5C8.41421 11.5 8.75 11.1642 8.75 10.75C8.75 10.3358 8.41421 10 8 10C7.58579 10 7.25 10.3358 7.25 10.75C7.25 11.1642 7.58579 11.5 8 11.5Z" fill="#FE2727"/>
                                      </svg>   <span className='mx-2'>Please select a language</span></div>
                                    )}
                                    {dropdownStates[index]?.isOpen && (
                                        <div className="options dropoptions">
                                            {options.map((option) => (
                                                <div
                                                    key={option.value}
                                                    className="option"
                                                    onClick={() => handleOptionSelect(option, index, plan._id)}
                                                >
                                                    <img src={option.image} alt={option.label} className="language-image" />
                                                    <span>{option.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}


            </div>
    </div>
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
</motion.div>
))}
  

</div>
<div className="navigation-dots">
            {plans.map((plan, index) => (
              <span
                key={plan._id}
                className={index === startIndex ? "dot active" : "dot"}
                onClick={() => showItem(index)}
              ></span>
            ))}
          </div>
        </div>
</div>
        
    

     
</Translator>       
    </>
   
  );
}

export default CustomSelect;
