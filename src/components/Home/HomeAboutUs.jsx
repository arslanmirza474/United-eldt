import React, { useEffect, useRef, useState } from "react";
import { Translator, Translate } from "react-auto-translate";
import OpenCloseItem from "../Faq/openCloseItem";
import AboutFeaturesList from "./AboutFeaturesList";
import { useSelector } from "react-redux";
import aboutvid from "./images/Screenshot 2024-03-23 203724.png"
import { Modal } from "antd";

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
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    const video = document.getElementById('video');
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  const closevide0 = ()=>{
    const video = document.getElementById('video');
if(video.play){
  video.pause();
      setIsPlaying(false);
}
  }
  
  return (
    <>
      <Translator
        from="en"
        to={languageState?.language?.value || "en"}
        googleApiKey={process.env.REACT_APP_GOOGLE_TRANSLATE_KEY}
      >
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

                  <div className="tw-flex lg:tw-justify-start tw-justify-center">
                    <button className="default-btn lg:tw-w-1/2  buttonofcourse" onClick={handleClick}>
                      View courses
                    </button>
                  </div>
                </p>

                <div className="about-image mobile" >
                  <img src={aboutvid} alt="image" />

                </div>
              </div>
              {!isPlaying && (
         <div className="animation-container_about" onClick={toggleVideo}>
         <svg className="svg1_about" xmlns="http://www.w3.org/2000/svg" width="75" height="74" viewBox="0 0 75 74" fill="none">
           <path d="M37.7471 61C51.0019 61 61.7471 50.2548 61.7471 37C61.7471 23.7452 51.0019 13 37.7471 13C24.4922 13 13.7471 23.7452 13.7471 37C13.7471 50.2548 24.4922 61 37.7471 61Z" fill="#FBB723" stroke="#FBB723" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
           <path d="M45.7471 37L33.7471 29V45L45.7471 37Z" stroke="#FDFDFD" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
         </svg>

         <svg className="svg2_about" xmlns="http://www.w3.org/2000/svg" width="75" height="74" viewBox="0 0 75 74" fill="none">
           <path d="M37.7471 61C51.0019 61 61.7471 50.2548 61.7471 37C61.7471 23.7452 51.0019 13 37.7471 13C24.4922 13 13.7471 23.7452 13.7471 37C13.7471 50.2548 24.4922 61 37.7471 61Z" fill="#FBB723" stroke="#FBB723" stroke-width="2.4" stroke-miterlimit="10" />
           <path d="M37.7468 73.8002C58.0709 73.8002 74.5468 57.3243 74.5468 37.0002C74.5468 16.6761 58.0709 0.200195 37.7468 0.200195C17.4227 0.200195 0.946777 16.6761 0.946777 37.0002C0.946777 57.3243 17.4227 73.8002 37.7468 73.8002Z" fill="#FBB723" fill-opacity="0.5" />
           <path d="M45.7471 37L33.7471 29V45L45.7471 37Z" stroke="#FDFDFD" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
         <span className="learntext_about">Learn More</span>
       </div>
      )}
              <div className="about-image desktop">
      <video id="video" style={{width:"100%",height:"100%"}} src="https://united-cdl-school.s3.amazonaws.com/Videos+of/English.mp4" poster={aboutvid} alt="video thumbnail" onClick={closevide0} />
  
    </div>

            </div>
            {/* <div className="about-bottom">
              <AboutFeaturesList language={language} />
            </div> */}
          </div>
        </div>
      </Translator>

    </>
  );
}
