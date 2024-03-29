import React from "react";
import { Translator, Translate } from "react-auto-translate";
import { useSelector } from "react-redux";
import { Carousel } from 'antd';
import "./feed.css"
import reviewpic from "./iconslider.png"
import marvin from "./images/Marving.jpg"
import bansanta from "./images/Basanta Ghimire.png"
import Crystal from "./images/Crystal.png"

export default function FeedbackSliderWithFunFacts({ language }) {
  const languageState = useSelector((state) => state.language);
  const settings = {
    // Other carousel settings...
    dotStyle: {
      bottom: '10px', // Adjust the position as needed
    },
    dotsClass: 'slick-dots slick-dots-bottom', // Custom class for styling
  };
  return (
    <>
      <Translator
        from="en"
        to={languageState?.language?.value || "en"}
        googleApiKey={process.env.REACT_APP_GOOGLE_TRANSLATE_KEY}
      >
        <div className="feedback-area">
          <div
            className="container lg:tw-px-4 tw-px-0 "
          >
            <div className="feedback-content flex f-direction-row justify-between">
              <div className="left-block">
                <span className="sub-title">
                  <Translate>Distance learning</Translate>
                </span>
                <h2 className="title" style={{ marginTop: "16px" }}>
                  <Translate>
                    Meet those who studied flexibly and in their own language, tailored to their needs.
                  </Translate>
                </h2>
                <p className="sub " style={{ color: "whitesmoke", marginTop: "16px" }}>
                  <Translate>
                    With the UNITED ELDT, you can get your CDL Endorsement.
                  </Translate>
                </p>
              </div>
              <div className="right_side rightslidercover">
                <div className="svgcontain">
                  <svg xmlns="http://www.w3.org/2000/svg" width="68" height="69" viewBox="0 0 68 69" fill="none">
                    <g filter="url(#filter0_d_2593_51706)">
                      <circle cx="33.9996" cy="34.3512" r="13.1364" fill="url(#paint0_linear_2593_51706)" />
                    </g>
                    <g filter="url(#filter1_d_2593_51706)">
                      <circle cx="33.9996" cy="34.3512" r="13.1364" fill="url(#paint1_linear_2593_51706)" />
                    </g>
                    <circle cx="34.0007" cy="34.3513" r="23.9545" stroke="#FBB723" stroke-opacity="0.5" stroke-width="1.54545" />
                    <circle cx="34" cy="34.3516" r="33.2273" stroke="#FBB723" stroke-width="1.54545" />
                    <defs>
                      <filter id="filter0_d_2593_51706" x="13.136" y="13.4876" width="41.728" height="41.7273" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.86364" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.117647 0 0 0 0 0.117647 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2593_51706" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2593_51706" result="shape" />
                      </filter>
                      <filter id="filter1_d_2593_51706" x="13.136" y="13.4876" width="41.728" height="41.7273" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.86364" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.984314 0 0 0 0 0.717647 0 0 0 0 0.137255 0 0 0 0.65 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2593_51706" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2593_51706" result="shape" />
                      </filter>
                      <linearGradient id="paint0_linear_2593_51706" x1="33.9996" y1="21.2148" x2="33.9996" y2="47.4876" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FBB723" />
                        <stop offset="1" stop-color="#B48622" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_2593_51706" x1="33.9996" y1="21.2148" x2="33.9996" y2="47.4876" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FBB723" />
                        <stop offset="1" stop-color="#B48622" />
                      </linearGradient>
                    </defs>
                  </svg></div>
                <div className="desktopversion">
                  <Carousel autoplay={true} >

                    <div className="carousel_cover">
                      <div className="right-block">
                        <div className="card-custom bg-white text-dark rounded-xl card">
                          <div className="digitalfont" style={{ lineHeight: "160%", marginTop: "20px" }}>
                            As a native Spanish speaker, finding the Class A ELDT course in my language was a breath of fresh air. United ELDT's commitment to offering the course in eight different languages,
                            As a native Spanish speaker, finding the Class A ELDT course in my language was a breath of fresh air. United ELDT's commitment to offering the course in eight different languages,

                          </div>
                          <div class="d-flex  marginabove">
                            <img
                              class=" feedimage rounded-circle"
                              src={marvin}
                            />
                            <div class="d-flex mx-3 flex-column ml-5">
                              <div class="text-warning font-weight-bold text-lg">
                                Marvin Aguilar
                              </div>
                              <div>Class A CDL Driver</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel_cover">

                      <div className="right-block">
                        <div className="card-custom bg-white text-dark rounded-xl card">
                          <div className="digitalfont" style={{ lineHeight: "160%", marginTop: "20px" }}>
                            I was thrilled to discover that United ELDT offers the Hazmat endorsement course in Hindi. Being one of the only platforms in the USA to provide such a wide range of language options.

                            I was thrilled to discover that United ELDT offers the Hazmat endorsement course in Hindi. Being one of the only platforms in the USA to provide such a wide range of language options.
                          </div>
                          <div class="d-flex  marginabove">
                            <img
                              class="feedimage rounded-circle"
                              src={bansanta}
                            />
                            <div class="d-flex mx-3 flex-column ml-5">
                              <div class="text-warning font-weight-bold text-lg">
                                Basanta Ghimire
                              </div>
                              <div>Class A CDL Driver</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel_cover">
                      <div className="right-block">
                        <div className="card-custom bg-white text-dark rounded-xl card">
                          <div className="digitalfont" style={{ lineHeight: "160%", marginTop: "20px" }}>
                            Initially skeptical about online CDL endorsement platforms, my experience here shifted my view. The content was current, relevant, and engaging, making learning intuitive.

                            Initially skeptical about online CDL endorsement platforms, my experience here shifted my view. The content was current, relevant, and engaging, making learning intuitive.
                          </div>
                          <div class="d-flex  marginabove">
                            <img
                              class="feedimage rounded-circle"
                              src={Crystal}
                            />
                            <div class="d-flex mx-3 flex-column ml-5">
                              <div class="text-warning font-weight-bold text-lg">
                                Crystal Curry
                              </div>
                              <div>Class A CDL Driver</div>
                            </div>
                          </div>
                        </div>
                      </div>      </div>
                  </Carousel>
                </div>
                <div className="mobileversion">
                  <Carousel autoplay={true} >

                    <div className="carousel_cover">
                      <div className="right-block">
                        <div className="card-custom bg-white text-dark rounded-xl card">
                          <div className="digitalfont" style={{ lineHeight: "160%", marginTop: "20px" }}>
                            As a native Spanish speaker, finding the Class A ELDT course in my language was a breath of fresh air. United ELDT's commitment to offering the course in eight different languages,

                          </div>
                          <div class="d-flex  marginabove">
                            <img
                              class=" feedimage rounded-circle"
                              src={marvin}
                            />
                            <div class="d-flex mx-3 flex-column ml-5">
                              <div class="text-warning font-weight-bold text-lg">
                                Marvin Aguilar
                              </div>
                              <div>Class A CDL Driver</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel_cover">

                      <div className="right-block">
                        <div className="card-custom bg-white text-dark rounded-xl card">
                          <div className="digitalfont" style={{ lineHeight: "160%", marginTop: "20px" }}>
                            I was thrilled to discover that United ELDT offers the Hazmat endorsement course in Hindi. Being one of the only platforms in the USA to provide such a wide range of language options.
                          </div>
                          <div class="d-flex  marginabove">
                            <img
                              class="feedimage rounded-circle"
                              src={bansanta}
                            />
                            <div class="d-flex mx-3 flex-column ml-5">
                              <div class="text-warning font-weight-bold text-lg">
                                Basanta Ghimire
                              </div>
                              <div>Class A CDL Driver</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel_cover">
                      <div className="right-block">
                        <div className="card-custom bg-white text-dark rounded-xl card">
                          <div className="digitalfont" style={{ lineHeight: "160%", marginTop: "20px" }}>
                            Initially skeptical about online CDL endorsement platforms, my experience here shifted my view. The content was current, relevant, and engaging, making learning intuitive.
                          </div>
                          <div class="d-flex  marginabove">
                            <img
                              class="feedimage rounded-circle"
                              src={Crystal}
                            />
                            <div class="d-flex mx-3 flex-column ml-5">
                              <div class="text-warning font-weight-bold text-lg">
                                Crystal Curry
                              </div>
                              <div>Class A CDL Driver</div>
                            </div>
                          </div>
                        </div>
                      </div>      </div>
                  </Carousel>
                </div>
                <div className="svgcontainafter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 55 56" fill="none">
                    <g filter="url(#filter0_d_2593_51711)">
                      <circle cx="27.5" cy="27.8516" r="10.625" fill="url(#paint0_linear_2593_51711)" />
                    </g>
                    <g filter="url(#filter1_d_2593_51711)">
                      <circle cx="27.5" cy="27.8516" r="10.625" fill="url(#paint1_linear_2593_51711)" />
                    </g>
                    <circle cx="27.5" cy="27.8516" r="19.375" stroke="#FBB723" stroke-opacity="0.5" stroke-width="1.25" />
                    <circle cx="27.5" cy="27.8516" r="26.875" stroke="#FBB723" stroke-width="1.25" />
                    <defs>
                      <filter id="filter0_d_2593_51711" x="10.625" y="10.9766" width="33.75" height="33.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.125" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.117647 0 0 0 0 0.117647 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2593_51711" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2593_51711" result="shape" />
                      </filter>
                      <filter id="filter1_d_2593_51711" x="10.625" y="10.9766" width="33.75" height="33.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3.125" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.984314 0 0 0 0 0.717647 0 0 0 0 0.137255 0 0 0 0.65 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2593_51711" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2593_51711" result="shape" />
                      </filter>
                      <linearGradient id="paint0_linear_2593_51711" x1="27.5" y1="17.2266" x2="27.5" y2="38.4766" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FBB723" />
                        <stop offset="1" stop-color="#B48622" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_2593_51711" x1="27.5" y1="17.2266" x2="27.5" y2="38.4766" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FBB723" />
                        <stop offset="1" stop-color="#B48622" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </div>


      </Translator>
    </>
  );
}
