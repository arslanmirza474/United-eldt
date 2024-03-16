import React from "react";
import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

import HeaderHeroImg from "./images/header-hero-img.png";
import PopupSvgComponent from "./PopupSvg";

const BannerAnimation = () => {
  // gsap.registerPlugin(useGSAP);
  const container = useRef();

  // useGSAP(
  //   () => {
  //     gsap.to(".box", { x: 360 });
  //   },
  //   { scope: container }
  // );

  return (
    <div ref={container} className="banner-animation-container">
      <PopupSvgComponent />
      <img src={HeaderHeroImg} alt="Header Hero Img" />
    </div>
  );
};

export default BannerAnimation;
