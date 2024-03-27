import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";

import { Translator, Translate } from "react-auto-translate";
import LeftHeroContent from "./LeftHeroContent";
import { useSelector } from "react-redux";
// import useHero1 from './Hero1/useHero1';
import heroimg1 from "./images/Group 1171278588.png";
import heroimg2 from "./Group 117127858823.png";
import heroimg from "./images/Realcover.svg";
import HeaderHeroImg from "./images/header-hero-img.png";
import BannerAnimation from "./BannerAnimation";
import LoaderAnimationSVGComponent from "./LoaderAnimationSVGComponent";
import PopupSvgComponent from "./PopupSvg"
const HeroBanner = styled("div")({
  display: `flex`,
  position: `relative`,
  flexDirection: `row`,
  width: `100%`,
  height: `fit-content`,
  backgroundColor: `#ffffff`,
  justifyContent: `center`,
  alignItems: `stretch`,
  alignContent: `stretch`,
  boxSizing: `border-box`,
  flexWrap: "wrap",
  flex: `1`,
});

const Hero = styled("div")({
  display: `flex`,
  position: `relative`,
  flexDirection: `row`,
  // justifyContent: `center`,
  // alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
  flexWrap: "nowrap",
  alignItems:"center"

});

const DivHeroLeft = styled("div")({
  display: `flex`,
  position: `relative`,
  flexDirection: `column`,
  justifyContent: "stretch",
  alignItems: `stretch`,
  padding: `30px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
  flexWrap: "wrap",
  marginTop:"10px"
});

const LeftHeroContentDiv = styled(LeftHeroContent)(({ theme }) => ({
  margin: `0px`,
  width: `100%`,
  height: `fit-content`,
  flexWrap: "wrap",
}));

const DivHeroRight = styled("div")({});
const MainImage = styled("img")(({ theme }) => ({
  width: "80%",

  [theme.breakpoints.up("xl")]: {
    width: "100%", // Set to 100% width for extra-large screens (xl and above)
  },
}));

const DivHeroRightContent = styled("div")({
  display: `flex`,
  position: `relative`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  width: `974px`,
  flexWrap: "wrap",
});

function Banner(...props) {
  const languageState = useSelector((state) => state.language);
  const [largeScreenImage, setLargeScreenImage] = useState(heroimg1);

  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width is greater than or equal to 1440 pixels
      const newImage = window.innerWidth <= 1440 ? heroimg2 : heroimg1;
      setLargeScreenImage(newImage);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize on component mount
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Translator
      from="en"
      to={props.language || languageState.language.value || "en"}
      googleApiKey={process.env.REACT_APP_GOOGLE_TRANSLATE_KEY}
    >
      {/* <LoaderAnimationSVGComponent /> */}

      <HeroBanner className={`hero-banner  tw-px-5 ${props.className}`}>
        <Hero className=" main-block">
          <DivHeroLeft className="main-left-content">
            <LeftHeroContentDiv language={props.language} />
          </DivHeroLeft>
          <PopupSvgComponent />

          <DivHeroRight className="rightimagecontent">
            <BannerAnimation />
          </DivHeroRight>
         
        </Hero>
      </HeroBanner>
    </Translator>
  );
}

export default Banner;
