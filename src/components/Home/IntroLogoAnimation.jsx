import gsap from "gsap";
import * as React from "react";

const IntroLogoAnimation = (props) => {
  React.useEffect(() => {
    const introLogoAnimation = gsap
      .timeline({
        onStart: () => document.body.classList.add("no-scroll"),
        onComplete: () => {
          document.body.classList.remove("no-scroll");
        },
      })
      .from("#l1", { x: 303, duration: 0.5})
      .from("#l10tm", { x: -350, duration: 0.5 }, "<")
      .from(
        ".stag",
        {
          delay: 0.1,
          duration: 0.5,
          alpha: 0,
          transformOrigin: "50% 50%",
          stagger: {
            amount: 0.2,
            from: "center",
          },
        },
        "<"
      )
      .fromTo(
        "#i-path",
        { strokeDasharray: "0% 100%" },
        { strokeDasharray: "100% 100%", duration: 1.2 },
        "-=0.3"
      )
      .from(
        "#i-dot",
        {
          y: 50,
        },
        "<"
      )
      .to(
        ".introContainer",
        {
          duration: 0.8,
          y: "-100%",
        },
        "-=0.7"
      );

    return () => {
      introLogoAnimation.kill();
    };
  }, []);

  return (
    <div className="introContainer">
      <div className="introInner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 822.82 164.5"
          {...props}
        >
          <defs>
            <style>
              {
                ".logoloader-1{fill:#fbb723;}.logoloader-2{fill:#fff;}.logoloader-3{fill:none;}"
              }
            </style>
          </defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                id="l1"
                className="logoloader-2"
                d="M100,76.72c0,13.73-4.38,24.25-13,31.4a56.19,56.19,0,0,1-36.95,10.81A56.93,56.93,0,0,1,13,108.12c-8.76-7.3-13-17.67-13-31.4v-60H32.28V76.28c0,5.7,1.46,10.23,4.52,13.59s7.31,5,13.15,5,10.22-1.75,13.14-5.11a19.1,19.1,0,0,0,4.67-13.44V16.7H100Z"
              />
              <path
                id="l2"
                className="logoloader-2 stag"
                d="M158,38.31q13.35,0,20.15,7.45c4.38,5,6.72,12.12,6.72,21.47v50H155.83V70.73a11.43,11.43,0,0,0-2.62-7.88,8.67,8.67,0,0,0-7.16-3.07,11.71,11.71,0,0,0-4.75.83,11.58,11.58,0,0,0-4,2.68,11.9,11.9,0,0,0-2.55,4,12.08,12.08,0,0,0-.81,4.64v45.28H104.86V40.07h23.81l1.9,11.68A35.07,35.07,0,0,1,158,38.31Z"
              />
              <g id="l3" className="stag">
                <rect
                  id="i-dot"
                  className="logoloader-2"
                  x={188.54}
                  y={11.29}
                  width={29.06}
                  height={19.72}
                />
                <rect
                  id="l31"
                  className="logoloader-1"
                  x={188.54}
                  y={40.07}
                  width={29.06}
                  height={77.11}
                />
                <path
                  id="i-path"
                  d="M 203 118 L 203 40"
                  stroke="#ffffff"
                  stroke-width="29"
                  fill="none"
                />
              </g>
              <path
                id="l4"
                className="logoloader-2 stag"
                d="M272.81,40.07V59.78H256.46V89.14c0,3.5.58,6.13,1.75,7.74s3.36,2.33,6.43,2.33h8.17V116.3a35.65,35.65,0,0,1-38.55-2c-4.53-3.07-6.86-8.47-6.86-15.92V59.78H216.59V40.07h12l6.28-23.37h21.62V40.07Z"
              />
              <path
                id="l5"
                className="logoloader-2 stag"
                d="M311.37,38.31c14.17,0,24.83,3.36,32.27,9.93S354.89,65,354.89,78.62v5H297.06c0,5.55,1.17,9.78,3.65,12.56s6.42,4.23,11.83,4.23c4.82,0,8.47-1,10.66-3.07a10.21,10.21,0,0,0,3.51-8.17h28.18A25.7,25.7,0,0,1,344.23,111a51.78,51.78,0,0,1-31.11,7.89,50.45,50.45,0,0,1-33.3-9.93C271.94,102.28,268,92.2,268,78.62c0-13.14,3.79-23.37,11.53-30.08C287.27,41.67,297.79,38.31,311.37,38.31Zm1.17,18.55c-9.2,0-14.31,4.38-15.34,13h28.34a13.06,13.06,0,0,0-.78-5.11A12.88,12.88,0,0,0,322,60.37a12.5,12.5,0,0,0-9.49-3.51Z"
              />
              <path
                id="l6"
                className="logoloader-2 stag"
                d="M410.24,117.18l-2.48-11a27.72,27.72,0,0,1-24.54,12.71,29.48,29.48,0,0,1-24.09-10.22c-5.7-6.87-8.47-16.95-8.47-30.24,0-13.14,2.92-23.22,8.47-29.93,5.69-6.87,13.72-10.23,24.09-10.23,8.77,0,16.07,2.92,21.62,8.91V11.29H433.9V117.18Zm-18-57.4c-8.33,0-12.56,5-12.56,15v7.74c0,9.94,4.23,14.9,12.56,14.9,4.38,0,7.45-1.46,9.64-4.53s3.21-7,3.21-11.83V76.28c0-4.82-1-8.76-3.21-11.83A11.17,11.17,0,0,0,392.28,59.78Z"
              />
              <path
                id="l7"
                className="logoloader-1 stag"
                d="M426.19,11.29h91.7V36.72H460.25V51.36h49.32V75.71H460.25V91.89H519v25.43H426.19Z"
              />
              <path
                id="l8"
                className="logoloader-1 stag"
                d="M526.21,11.29h34.06v78.9h54.4v27.13H526.21Z"
              />
              <path
                id="l9"
                className="logoloader-1 stag"
                d="M663.67,11.29c37,0,55.64,17.72,55.64,53,0,35.45-18.49,53-55.64,53H617.75v-106Zm-11.86,80.6h11.25c14.33,0,21.42-7.71,21.42-23V59.68c0-15.41-7.09-23-21.42-23H651.81Z"
              />
              <g id="l10tm">
                <path
                  id="l10"
                  className="logoloader-1"
                  d="M787.43,38.41v78.91H753.37V38.41H718.54V11.29H822.11V38.41Z"
                />
                <path
                  className="logoloader-2"
                  d="M807.37,2.52V9.26h-2.91V2.52h-3V.2h8.85V2.52Z"
                />
                <path
                  className="logoloader-2"
                  d="M819.22,9.26V6a19.46,19.46,0,0,1,.21-2.86h-.06L817.7,9.26h-2.27l-1.69-6.12h0l.18,1.62q.06.63.06,1.23V9.26h-2.67V.2h4.1l1.37,5.23h0L818.14.2h4V9.26Z"
                />
              </g>
              <rect
                className="logoloader-3"
                x={0.3}
                width={822.51}
                height={164.5}
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
export default IntroLogoAnimation;
