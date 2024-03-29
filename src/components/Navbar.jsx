import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { Translator, Translate } from "react-auto-translate";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
// import Cart from "./navbar/Cart";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/UserActions";
import { Link as ScrollLink } from 'react-scroll';
import weblogo from "./Unitedlogo.png"
import { jwtDecode } from "jwt-decode";
import brandlogo from "./ELDT LOGO.svg"
import barzil from "../components/Home/images/BR Brazil.svg"
import america from "../components/Home/images/US United States of America (the).svg"
import pakistan from "../components/Home/images/PK Pakistan.svg"
import india from "../components/Home/images/IN India.svg"
import russia from "../components/Home/images/RU Russian Federation (the).svg"
import france from "../components/Home/images/FR France.svg"
import arabic from "../components/Home/images/EH Western Sahara.svg"
import spain from "../components/Home/images/ES Spain.svg"
export default function Navbar({ className = "is-home" }, ...props) {
  const [backgroundColor, setBackgroundColor] = useState("#fff")
  const [websitelogo, setWebsitelogo] = useState(brandlogo)

  const ref = useRef();
  const toggleNavbar = () => {
    setMenu(!menu);
    if (screenWidth <= 500) {
      setBackgroundColor(backgroundColor === "#fff" ? "#2c292a" : "#fff")
      setWebsitelogo(websitelogo === weblogo ? brandlogo : weblogo)
    }
  };
  const location = useLocation();
  const handleClick = () => {
    toggleNavbar()
    window.scrollTo({
      top: 1150,
      behavior: "smooth",
    });

  };
  const buybutton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    const personId = localStorage.getItem("userId");
    if (personId) {
      const decoded = jwtDecode(personId);
      setUserId(decoded);
    }
  }, []);

  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const lang = "en";
  const BtnLang = styled("div")({});

  const languageState = useSelector((state) => state.language);
  const [flg, setFlg] = useState(america);

  
  const [nameLang, setNameLang] = useState(
    languageState?.language?.name || "English"
  );
  
  
  const [openLang, setOpenLang] = useState(false);
  const [menu, setMenu] = useState(false);

  const availableLanguages = [
    { name: "English", value: "en", flagImage: america },
    { name: "Spanish", value: "es", flagImage: spain },
    { name: "Arabic", value: "ar", flagImage: arabic },
    { name: "Russian", value: "ru", flagImage: russia },
    { name: "Hindi", value: "hi", flagImage: india },
    { name: "French", value: "fr", flagImage: france },
    { name: "Urdu", value: "ur", flagImage: pakistan },
    { name: "Portuguese", value: "pt", flagImage: barzil },
  ];
  

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {

      elementId.classList.add("is-sticky");

    });
  });
  const SelectLanguage = (availableLanguages, i18n, lang) => {
    return (
      <>
       <BtnLang
  className="block-lang"
  onClick={() => setOpenLang(!openLang)}
>
  <img
    src={flg}
    alt={nameLang}
    style={{ width: 32, height: 32 }}
  />
  <span className="name-lang" style={{ display: "flex" }}>
    <Translate>{nameLang}</Translate>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="tw-w-6 tw-h-6 tw-text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
    <i className="fa-solid fa-chevron-down mx-2"></i>
  </span>
</BtnLang>

<div className={"dropdown-menu m-auto " + (openLang ? 'show' : '')} id="language-menu">
  <ul className="list-striped">
    {availableLanguages.map((language, index) => {
      return (
        <li
          className={
            "button flag-button " + (lang === language.name ? "active" : "")
          }
          style={{
            margin: "auto",
            padding: "5px",
            display: "flex",
            justifyContent: "flex-start",
          }}
          onClick={() => {
            dispatch(
              setLanguage({
                name: language.name,
                value: language.value,
                className: language.className,
              })
            );
            setFlg(language.flagImage); // Change to set the flag image
            setNameLang(language.name);
            setOpenLang(false); // Close the language dropdown after selecting a language
            toggleNavbar();
          }}
          key={index}
        >
          <img
            src={language.flagImage} // Use the flag image
            alt={language.name}
            style={{ width: 20, height: 20, marginRight: "5px" }}
          />
          {language.name}
        </li>
      );
    })}
  </ul>
</div>

      </>
    );
  };

  const classOne = menu ? "collapse ms-auto show" : "collapse ms-auto show";
  const [isScrolled, setIsScrolled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 450); // Change 400 to your desired scroll position
    };

    if (location.pathname === '/classa') {
      window.addEventListener('scroll', handleScroll);
      setBackgroundColor("#fff")
      setWebsitelogo(brandlogo)
    } else {
      setIsScrolled(false);
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [screenWidth]);
  return (
    <Translator
      from="en"
      to={languageState.language.value}
      googleApiKey={process.env.REACT_APP_GOOGLE_TRANSLATE_KEY}
    >
      <nav id="navbar" className={isScrolled ? 'scrolled-navbar' : 'no-tailwindcss'}>
        {/* Render different navbar content based on isScrolled */}
        {isScrolled ? (
          <div className="scrolled-navbar">
            <div className="coverofnavbar">
              <div className="leftscroll">
                <div className="nameofclass">
                  Class A
                </div>
                <div className="red-cover">
                  <div className="redprice">
                    50% OFF
                  </div>
                  <div className="coverofextra">
                    $50.00
                  </div>
                </div>

              </div>
              <div className="rightscroll">
                <div className="buysmallbutton" onClick={buybutton}>
                  Buy now
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div className="no-tailwindcss">
            <div id="navbar" style={{ backgroundColor }} className={`navbar-area ${className}`} ref={ref}>
              <div className="edemy-nav">
                <div className="container-full">
                  <div className="navbar navbar-expand navbar-light">

                    <Link to="/">
                      <a onClick={toggleNavbar} className="navbar-brand">
                        <img
                          src={websitelogo}
                          alt="logo"
                          class="navlogo"
                          className="logo-nav"
                        />
                      </a>
                    </Link>



                    <button
                      className={`button-open-menu  ${menu ? "is-open" : ""}`}
                      onClick={toggleNavbar}
                      type="button"
                    >
                      <span className="icon-bar top-bar"></span>
                      <span className="icon-bar middle-bar"></span>
                      <span className="icon-bar bottom-bar"></span>
                    </button>
                    <div
                      className={`block-right-topo ${menu ? "open-mobile" : ""}`}
                    >
                      <div className={classOne} id="navbarSupportedContent">
                        <div className="navbar-nav flex">
                          <motion.li
                            className={`nav-item ${openLang ? "show-menu" : ""}`}
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Link active className="active">
                              <a className="nav-link">
                                {SelectLanguage(availableLanguages, "en", lang)}
                              </a>
                            </Link>
                          </motion.li>
                          <motion.li className="nav-item">
                            <Link
                              onClick={() => {
                                setMenu(false);
                              }}
                              to="/"
                              active
                              className="active"
                            >
                              <a className="nav-link">
                                <Translate>Home</Translate>
                              </a>
                            </Link>
                          </motion.li>

                          <motion.li className="nav-item" whileTap={{ scale: 0.9 }}>
                            <Link
                              onClick={() => {
                                setMenu(false);
                              }}

                              active
                              className="active"
                            >

                              <ScrollLink onClick={handleClick} to="targetSection" smooth={true} duration={500} className="nav-link">
                                <Link to="/"> <Translate>Courses</Translate></Link>
                              </ScrollLink>
                            </Link>
                          </motion.li>






                          <motion.li className="nav-item">
                            <div className="others-option d-flex align-items-center"></div>
                          </motion.li>
                        </div>
                      </div>

                      <div className="others-option d-flex align-items-center">
                        {/* <Cart
                            language={languageState?.language?.value}
                            setMenu={setMenu}
                          /> */}
                        {
                          userId === null ? (<>
                            <div className="option-item">

                              <Link
                                onClick={() => {
                                  setMenu(false);
                                }}
                                to="/login"
                              >
                                <a className="default-btn">
                                  <Translate>Login</Translate>
                                </a>
                              </Link>

                            </div>
                          </>) : (
                            <>
                              <div className="option-item">

                                <Link
                                  onClick={() => {
                                    setMenu(false);
                                  }}
                                  to="/studentdash"
                                >
                                  <a className="default-btn">
                                    <Translate>Dashboard</Translate>
                                  </a>
                                </Link>

                              </div>

                            </>
                          )
                        }

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

    </Translator>
  );
}
