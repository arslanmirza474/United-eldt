import React, { useEffect, useRef, useState } from "react";
import { Translator, Translate } from "react-auto-translate";
import OpenCloseItem from "../Faq/openCloseItem";
import AboutFeaturesList from "./AboutFeaturesList";
import { useSelector } from "react-redux";
import aboutvid from "./images/Screenshot 2024-03-23 203724.png"
import { Modal } from "antd";
import allcomp from "../../pages/Images/AllCampanies.svg"
import SliderSponsor from "../../pages/Allsponsors.svg"

const WhyChooseUs = () => {



  return (
    <React.Fragment>
      <h3 className="ref-open-title">
        <Translate>Why Choose Us?</Translate>
      </h3>

      <ul className="open-close-info block-open-close">
        <OpenCloseItem
          title={<Translate>Comprehensive Online Training</Translate>}
          text={
            <Translate>
              Our ELDT course is designed to equip you with the essential
              knowledge and skills needed to excel in the transportation
              industry. Through our user-friendly online platform, you'll have
              access to interactive modules, video tutorials, and practical
              exercises, allowing you to learn at your own pace and convenience.
            </Translate>
          }
        />
        <OpenCloseItem
          title={<Translate>Expert Instructors</Translate>}
          text={
            <Translate>
              Our team of experienced instructors brings a wealth of knowledge
              and expertise to the virtual classroom. They are passionate about
              sharing their insights and providing personalized guidance to
              ensure you receive the highest quality training. With their
              support, you'll gain the confidence and competence necessary to
              thrive in your driving career.
            </Translate>
          }
        />

        <OpenCloseItem
          title={<Translate>State of the Art Simulations</Translate>}
          text={
            <Translate>
              At United ELDT, we believe in hands-on learning. Our cutting-edge
              driving simulations offer a realistic and immersive training
              experience, allowing you to practice various driving scenarios in
              a safe virtual environment. You'll develop critical
              decision-making skills, master defensive driving techniques, and
              build the foundation for a successful driving career.
            </Translate>
          }
        />
        <OpenCloseItem
          title={<Translate>Job Placement Assistance</Translate>}
          text={
            <Translate>
              We go the extra mile to support our students beyond their
              training. Our dedicated team provides valuable resources and
              guidance to help you navigate the job market successfully. From
              resume building to interview preparation, we are here to empower
              you with the tools and knowledge needed to secure rewarding
              driving positions.
            </Translate>
          }
        />
        <OpenCloseItem
          title={<Translate>Flexible Learning Options</Translate>}
          text={
            <Translate>
              We understand that everyone has unique schedules and commitments.
              That's why we offer flexible learning options that allow you to
              balance your ELDT course with other responsibilities. Whether
              you're a working professional or a busy student, our online
              platform gives you the freedom to learn anytime, anywhere.
            </Translate>
          }
          active="active"
        />
      </ul>
    </React.Fragment>
  );
};
export default function HomeAboutUs({ language }) {
  const languageState = useSelector((state) => state.language);
  
  const handleClick = () => {
    console.log("pushed");
    window.scrollTo({
      top: 1000, // Scroll to the position 1000 pixels from the top
      behavior: "smooth",
    });
  };
  const [openvideo,setOpenvideo]=useState(false)

  const [openmobile,setOpenmobile]=useState(false)
  const videoRef = useRef(null);
  const handlemobile = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    // Call the parent component's close modal function
    setOpenmobile(false);
  };
  const handleCloseModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    // Call the parent component's close modal function
    setOpenvideo(false);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Translator
        from="en"
        to={languageState?.language?.value || "en"}
        googleApiKey={process.env.REACT_APP_GOOGLE_TRANSLATE_KEY}
      >
        {
          windowWidth <= 500?(<>
                      <div className="coverofreviewslider">
                      <div className="coverofsponer4">
                    <div className="courseltitle" style={{ display: "flex", justifyContent: "center" }}>
                        Partner Companies
                    </div>
                    <div className="descofpartner">
                        <div className="inercon">
                            Students who graduated with us are now working in these companies.

                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <img className="sponsorimage" src={SliderSponsor} alt="Sponsor" />

                    </div>

                </div>
                      </div>
</>):( <div className="coverofhome_company" >
            <div className="containerofclassa mt-5">
        <div className="Graudatestudentjobs">
        <div className="courseltitle titleformobile"style={{display:"flex",justifyContent:"center",width:"100%",fontSize:"40px",fontWeight:"700"}} >
        The best companies are with us
                    </div>
                    <div className="describethestudent" style={{fontSize:"21px"}}>
                    Students who graduated with us are now working in these companies.
                    </div>
                    <img className="sponsodeimage" src={allcomp} alt="all_companies"/>
                    </div>
        </div>
        </div>)
        }
       
         
        <div className="about-area">
          <div className="container ">
            <div className="about-area-block">
              <div className="about-content">
                <span className="sub-title" >
                  <Translate>Online Learning</Translate>
                </span>

                <h2 className="title mobileabout">
                  <Translate>

                    Welcome to United ELDT - where driving careers begin.
                  </Translate>
                </h2>
                <h2 className="title desktopabout">
                  <Translate>

                    Welcome to United ELDT - your gateway to professional driving careers
                  </Translate>
                </h2>
                <p className="sub">
                  <span className="mobileabout">
                    <Translate>
                      At United ELDT, we know that becoming a skilled driver is your first step to a successful career. As a top ELDT course provider online, we're dedicated to helping you reach your driving goals and open doors to new opportunities.
                    </Translate>
                  </span>
                  <span className="desktopabout textofdesk">
                    <Translate>
                      At United ELDT, we understand that becoming a skilled and confident driver is the first step towards a successful career on the road. As a leading provider of Entry Level Driving Training (ELDT) courses online, we are committed to helping aspiring drivers like you achieve their goals and unlock a world of opportunities.                 </Translate>
                  </span>

                  <div className="tw-flex lg:tw-justify-start tw-justify-center vousebtn">
                    <button className="default-btn lg:tw-w-1/2  buttonofcourse" onClick={handleClick}>
                      View courses
                    </button>
                  </div>
                </p>

                <div className="about-image mobile" >
                  <img src={aboutvid} alt="image"  onClick={()=>{setOpenmobile(true)}}/>
          
                </div>
              </div>

              <div className="about-image desktop">
      <img style={{width:"100%",height:"100%"}} src={aboutvid} alt="video thumbnail" onClick={()=>{setOpenvideo(true)}}/>
       
    </div>

            </div>
            {/* <div className="about-bottom">
              <AboutFeaturesList language={language} />
            </div> */}
          </div>
        </div>
        <Modal

        open={openvideo}
        onCancel={handleCloseModal}
        footer={null}
        width={1200}
        style={{ padding: 0, borderRadius: 0, background: "black" }} // Removed padding and border radius
        closeIcon={false}
        bodyStyle={{ padding: 0, background: "black" ,marginTop: 0 }} // Removed padding for the modal body
      >
        <video controls width="1200px"  height="auto" autoPlay ref={videoRef}>
          {/* Adjusted video size */}
          <source src="https://united-cdl-school.s3.amazonaws.com/Videos+of/English.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal> 
      <Modal
        open={openmobile}
        onCancel={handlemobile}
        footer={null}
        width="90vw"
        style={{ padding: 0, borderRadius: 0, background: "black" }} // Removed padding and border radius
        closeIcon={false}
        bodyStyle={{ padding: 0, background: "black" ,marginTop: 0 }} // Removed padding for the modal body
      >
        <video controls width="100%"  height="auto" autoPlay ref={videoRef}>
          {/* Adjusted video size */}
          <source src="https://united-cdl-school.s3.amazonaws.com/Videos+of/English.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal> 
      </Translator>

    </>
  );
}
