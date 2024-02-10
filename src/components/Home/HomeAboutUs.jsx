import React, { useEffect, useRef, useState } from "react";
import { Translator, Translate } from "react-auto-translate";
import OpenCloseItem from "../Faq/openCloseItem";
import AboutFeaturesList from "./AboutFeaturesList";
import { useSelector } from "react-redux";
import aboutvid from "./video_2023-01-28_16-32-41.mp4"

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
  const videoRef = useRef(null);
 
  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();

      } else {
        videoRef.current.play();
        videoRef.current.muted = false;

      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleDoubleClick = () => {
    if (videoRef.current) {
      videoRef.current.controls = true; // Show controls for manual interaction
    }
  };
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

                <h2 className="title">
                  <Translate>
                  
                    Welcome to United ELDT - Your Gateway to Professional
                    Driving Careers
                  </Translate>
                </h2>
                <p className="sub">
                  <Translate>
                    At United ELDT, we understand that becoming a skilled and
                    confident driver is the first step towards a successful
                    career on the road. As a leading provider of Entry Level
                    Driving Training (ELDT) courses online, we are committed to
                    helping aspiring drivers like you achieve their goals and
                    unlock a world of opportunities.
                  </Translate>
                  <div className="tw-flex lg:tw-justify-start tw-justify-center">
                    <button className="default-btn lg:tw-w-1/2 " onClick={handleClick}>
                      View courses
                    </button>
                  </div>
                </p>

                <div className="about-image mobile" onClick={handlePlay}   onDoubleClick={handleDoubleClick}>
                <video
                    // src={aboutvid}
                    ref={videoRef}
                    preload="auto"
                    loop
                    autoPlay={"autoplay"}
                    muted
                    playsInline
                    poster="https://res.cloudinary.com/dlj1daxbn/image/upload/v1707585490/Screenshot_2024-02-10_221714_l5nk3t.png"
                  >
                     <source
          src="https://res.cloudinary.com/dlj1daxbn/video/upload/v1707561986/video_2023-01-28_16-32-41_m1c6vw.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
                </div>
              </div>

              <div className="about-image desktop" onClick={handlePlay} onDoubleClick={handleDoubleClick}>
              <video
                    // src={aboutvid}
                    ref={videoRef}
                    preload="auto"
                    loop
                    muted
                    playsInline
                  >
                     <source
          src="https://res.cloudinary.com/dlj1daxbn/video/upload/v1707561986/video_2023-01-28_16-32-41_m1c6vw.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
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
