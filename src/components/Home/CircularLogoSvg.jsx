import gsap from "gsap";
import * as React from "react";
// import { gsap } from "./gsap.min.js";

const CircularLogoSVGComponent = (props) => {
  React.useEffect(() => {
    const circularLogoAnimation = gsap.timeline({ repeat: -1 });
    circularLogoAnimation.to(".circularlines", {
      duration: 20,
      ease: "none",
      rotation: "360deg",
      transformOrigin: "center",
    });
    return () => circularLogoAnimation.kill();
  }, []);

  return (
    <div className="circularLogoContainer">
      <svg
        id="circular-logo-svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 168.5 168.5"
        {...props}
      >
        <defs>
          <style>
            {
              ".circular-1{fill:#2c292a;}.circular-2{fill:#fab623;}.circular-3{fill:url(#linear-gradient);}.circular-4{fill:url(#linear-gradient-2);}.circular-5{fill:#fff;}.circular-6{fill:none;}"
            }
          </style>
          <linearGradient
            id="linear-gradient"
            x1={72.89}
            y1={69.75}
            x2={72.89}
            y2={103.99}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#fab622" />
            <stop offset={1} stopColor="#503803" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1={93.64}
            y1={69.75}
            x2={93.64}
            y2={103.99}
            xlinkHref="#linear-gradient"
          />
        </defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <circle
              className="circular-1"
              cx={84.25}
              cy={84.25}
              r={84.25}
              transform="translate(-25.83 38.65) rotate(-22.5)"
            />
            <path
              className="circular-2"
              d="M84.25,162.93a78.68,78.68,0,1,1,78.68-78.68A78.77,78.77,0,0,1,84.25,162.93Zm0-155.36a76.68,76.68,0,1,0,76.68,76.68A76.77,76.77,0,0,0,84.25,7.57Z"
            />
            <image
              width={158}
              height={157}
              transform="translate(5.31 5.78)"
              xlinkHref="data:image/png;base64,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"
            />
            <circle className="circular-1" cx={84.25} cy={84.25} r={42.41} />
            <path
              className="circular-3"
              d="M82.46,81.51l-2-2L67.92,67a3.31,3.31,0,0,0-2.37-1A3.36,3.36,0,0,0,63,67.13a3.49,3.49,0,0,0,.27,4.72L75.18,83.73a.74.74,0,0,1,0,1l-12,12a3.36,3.36,0,0,0,4.75,4.75L80.44,89l2-2A3.87,3.87,0,0,0,82.46,81.51Z"
            />
            <path
              className="circular-4"
              d="M103.21,81.51l-2-2L88.67,67a3.31,3.31,0,0,0-2.37-1,3.38,3.38,0,0,0-2.53,1.13,3.48,3.48,0,0,0,.28,4.72L95.93,83.73a.74.74,0,0,1,0,1l-12,12a3.36,3.36,0,0,0,4.75,4.75L101.19,89l2-2A3.87,3.87,0,0,0,103.21,81.51Z"
            />

            <g className="circularlines">
              <path
                className="circular-5"
                d="M30.22,70.37c.48-1.86.09-3.66-2.77-4.4l-5.16-1.32L22,66l5.24,1.34c1.93.49,2.3,1.52,2,2.79-.28,1.08-1.1,2-3.09,1.51l-5.23-1.35-.33,1.31,5.24,1.34C28.48,73.59,29.75,72.22,30.22,70.37Z"
              />
              <path
                className="circular-5"
                d="M35.44,56.91,32.51,55.1c-1.38-.85-2.73-1.68-3.6-2.14l0,0c1.14.07,6.62.16,8.85.19l.86-1.39L31,47l-.66,1.06,2.85,1.77c1.25.77,2.48,1.54,3.47,2.05v0c-1.08-.1-6.16-.11-8.6-.13l-.91,1.47L34.78,58Z"
              />
              <rect
                className="circular-5"
                x={41.86}
                y={36.11}
                width={1.33}
                height={9}
                transform="translate(-16.27 40.67) rotate(-43.74)"
              />
              <polygon
                className="circular-5"
                points="56.65 35.64 52.67 28.85 55.16 27.4 54.58 26.42 48.46 30.01 49.03 30.98 51.52 29.53 55.49 36.32 56.65 35.64"
              />
              <polygon
                className="circular-5"
                points="68.18 29.52 67.41 26.61 71.7 25.47 71.41 24.37 67.12 25.51 66.45 23.01 70.94 21.82 70.65 20.72 64.9 22.25 67.21 30.94 73.02 29.4 72.9 28.26 68.18 29.52"
              />
              <path
                className="circular-5"
                d="M85.63,19.38l-3.28-.08-.22,9,3.23.08c2.64.06,4.35-1.83,4.42-4.49A4.08,4.08,0,0,0,85.63,19.38Zm-.33,7.88-1.81-.05.17-6.76,1.81.05c2.12.05,3,1.66,2.92,3.38C88.34,25.86,87.34,27.31,85.3,27.26Z"
              />
              <polygon
                className="circular-5"
                points="114.87 36.02 110.6 33.66 112.06 31.02 115.94 33.18 116.49 32.19 112.61 30.04 113.86 27.77 117.93 30.02 118.47 29.04 113.27 26.15 108.91 34.01 114.17 36.93 114.87 36.02"
              />
              <polygon
                className="circular-5"
                points="126.57 45.89 123.25 42.64 128.74 37.02 127.79 36.09 121.5 42.52 125.66 46.58 126.57 45.89"
              />
              <path
                className="circular-5"
                d="M138.83,57.86A4.08,4.08,0,0,0,140.55,52l-1.62-2.86-7.83,4.46,1.61,2.81C134,58.68,136.52,59.17,138.83,57.86Zm-.22-7,.9,1.57c1.05,1.85.1,3.4-1.39,4.25-1.72,1-3.48.87-4.49-.91l-.89-1.57Z"
              />
              <polygon
                className="circular-5"
                points="138.41 70.39 138.73 71.7 146.37 69.84 147.05 72.63 148.15 72.37 146.48 65.48 145.38 65.74 146.06 68.54 138.41 70.39"
              />
              <path
                className="circular-5"
                d="M142.94,94.2l5.29,1.1.28-1.32-5.3-1.1c-2.75-.57-4,.86-4.34,2.73s.08,3.67,3,4.26l5.22,1.08.27-1.31L142,98.55c-1.95-.41-2.37-1.42-2.11-2.69C140.16,94.76,140.94,93.79,142.94,94.2Z"
              />
              <path
                className="circular-5"
                d="M134.28,109.3l3,1.68c1.42.78,2.81,1.55,3.69,2v0c-1.15,0-6.61.14-8.84.21l-.8,1.43,7.86,4.38.6-1.09-2.92-1.63c-1.29-.72-2.54-1.43-3.56-1.89v0c1.09,0,6.16-.18,8.59-.26l.85-1.52-7.86-4.37Z"
              />
              <polygon
                className="circular-5"
                points="124.26 123.28 130.78 129.48 131.7 128.51 125.18 122.31 124.26 123.28"
              />
              <polygon
                className="circular-5"
                points="119.5 137.38 115.22 130.79 114.09 131.52 118.38 138.12 115.96 139.68 116.58 140.63 122.53 136.77 121.91 135.82 119.5 137.38"
              />
              <polygon
                className="circular-5"
                points="98.02 138.53 98.2 139.66 102.85 138.19 103.76 141.06 99.53 142.4 99.87 143.47 104.1 142.13 104.89 144.6 100.45 146.01 100.79 147.08 106.47 145.29 103.76 136.71 98.02 138.53"
              />
              <path
                className="circular-5"
                d="M85.74,140.12c-2.64.06-4.27,2-4.21,4.69a4.07,4.07,0,0,0,4.35,4.31l3.28-.07-.19-9ZM86,148c-2.12.05-3-1.52-3.07-3.24,0-2,.89-3.48,2.93-3.52l1.81,0L87.8,148Z"
              />
              <polygon
                className="circular-5"
                points="55.91 133.86 60.28 136.02 58.95 138.73 54.97 136.76 54.47 137.77 58.45 139.74 57.3 142.06 53.13 140 52.63 141.02 57.97 143.66 61.95 135.59 56.56 132.92 55.91 133.86"
              />
              <polygon
                className="circular-5"
                points="43.76 124.55 47.23 127.64 42 133.51 43 134.4 48.98 127.68 44.64 123.82 43.76 124.55"
              />
              <path
                className="circular-5"
                d="M31,113.16a4.08,4.08,0,0,0-1.44,6l1.75,2.77,7.6-4.81-1.73-2.73C35.73,112.11,33.2,111.74,31,113.16Zm.55,7-1-1.53c-1.14-1.79-.27-3.38,1.18-4.3,1.68-1.06,3.44-1,4.53.69l1,1.52Z"
              />
              <polygon
                className="circular-5"
                points="30.8 100.63 30.42 99.34 22.87 101.56 22.06 98.8 20.97 99.12 22.97 105.92 24.06 105.61 23.25 102.85 30.8 100.63"
              />
              <circle className="circular-5" cx={141.11} cy={82.57} r={1.26} />
              <path
                className="circular-5"
                d="M26.27,85.51a1.26,1.26,0,1,0,1.26-1.26A1.25,1.25,0,0,0,26.27,85.51Z"
              />
              <rect
                className="circular-6"
                x={1.96}
                y={1.96}
                width={164.59}
                height={164.59}
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
export default CircularLogoSVGComponent;
