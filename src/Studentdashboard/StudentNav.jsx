import "./studentdashcss.css"
import logo from "./logo 1.svg"
import StudentRegistration from "./StudentRegistration";
import Progre from "./Progre";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CourseList from "./CourseList";
import Coursedetail from "./Coursedetail";
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import Buyanother from "./Buyanother";
import cart from "./add-cart (1).png"
function StudentNav() {
  const [selectedPage, setSelectedPage] = useState("");
  const [loca, setLoca] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const { local } = useParams();
  const [location, setLocation] = useState(null);
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    if (openNav) {
      // Disable scrolling when Navbar is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when Navbar is closed
      document.body.style.overflow = "auto";
    }
  
    // Cleanup function to restore default scrolling behavior when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openNav]);
  useEffect(() => {
    if (local != undefined) {
      setLocation(local);
    }

  }, []);
  const handleToggle = () => {
    setOpenNav(!openNav);
  };
  const navigate = useNavigate()
  const handleNavigationClick = (page) => {
    setSelectedPage(page);
  };

  const [userId, setUserId] = useState("")
  const closeNavbar = () => {
    setOpenNav(false);
  };
  useEffect(() => {
    const personId = localStorage.getItem("userId");
    if (personId) {
      const decoded = jwtDecode(personId);
      setUserId(decoded.id);
    } else {
      navigate("/")
    }
  }, [userId]);
  useEffect(() => {
    axios.get(`https://server-of-united-eldt.vercel.app/api/studentbyid/${userId}`)
      .then(res => {
        if (res.data.status === true) {
          if (location != null) {
            if (location === "buynew") { // Corrected the comparison operator from = to ===
              setSelectedPage("newcoursebuy");
              setLocation(null)
            } else if (location === "myaccount") { // Changed if else to else if
              setSelectedPage("myaccount");
              setLocation(null)
            }
          } else {
            if (!res.data.student.firstName) {
              setSelectedPage("courses");
              setLoca("courses");
            } else {
              setSelectedPage("information");
              setLoca("information");
            }
          }
        }

      })
      .catch(error => {
        console.error("Error fetching user info:", error);
      });
  }, [userId])
  const renderPage = () => {
    switch (selectedPage) {

      case 'courselist':
        return <CourseList />;
      case 'courses':
        return <Progre handleNavigationClick={handleNavigationClick} />;
      case 'information':
        return <Coursedetail />;
      case 'myaccount':
        return <StudentRegistration handleNavigationClick={handleNavigationClick} />;

      case 'newcoursebuy':
        return <Buyanother handleNavigationClick={handleNavigationClick} />;
      default:
        return null;
    }
  };
  return (
    <div className="d-flex mainstudentdiv">
      <div className="main-nav">
        <div className="logo_wraper">
          <img src={logo} alt="complogo" />
        </div>
        <div className="Navbar_Links">
          <ul>
            <Link to="/">

              <li className="mainlink">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M11.875 16.8501V13.1001C11.875 12.9344 11.8092 12.7754 11.6919 12.6582C11.5747 12.541 11.4158 12.4751 11.25 12.4751H8.75C8.58424 12.4751 8.42527 12.541 8.30806 12.6582C8.19085 12.7754 8.125 12.9344 8.125 13.1001V16.8501C8.125 17.0159 8.05915 17.1749 7.94194 17.2921C7.82473 17.4093 7.66576 17.4751 7.5 17.4751H3.75C3.58424 17.4751 3.42527 17.4093 3.30806 17.2921C3.19085 17.1749 3.125 17.0159 3.125 16.8501V9.62358C3.1264 9.53708 3.14509 9.45174 3.17998 9.37258C3.21486 9.29342 3.26523 9.22204 3.32812 9.16264L9.57812 3.48296C9.69334 3.37755 9.84384 3.31909 10 3.31909C10.1562 3.31909 10.3067 3.37755 10.4219 3.48296L16.6719 9.16264C16.7348 9.22204 16.7851 9.29342 16.82 9.37258C16.8549 9.45174 16.8736 9.53708 16.875 9.62358V16.8501C16.875 17.0159 16.8092 17.1749 16.6919 17.2921C16.5747 17.4093 16.4158 17.4751 16.25 17.4751H12.5C12.3342 17.4751 12.1753 17.4093 12.0581 17.2921C11.9408 17.1749 11.875 17.0159 11.875 16.8501Z" stroke="#696969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>  Homepage
              </li></Link>
            <li className={`mainlink ${selectedPage === 'courses' || selectedPage === 'information' ? 'activateding' : ''}`} onClick={() => handleNavigationClick(loca)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M2.5 5.6001V11.8501" stroke="#696969" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.23438 17.4751C4.85974 16.5159 5.71451 15.7279 6.72128 15.1824C7.72804 14.637 8.85497 14.3513 10 14.3513C11.145 14.3513 12.272 14.637 13.2787 15.1824C14.2855 15.7279 15.1403 16.5159 15.7656 17.4751" stroke="#696969" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.5 5.6001L10 8.1001L2.5 5.6001L10 3.1001L17.5 5.6001Z" stroke="#696969" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.2266 7.02197C13.7999 7.64805 14.1787 8.4274 14.3167 9.26502C14.4548 10.1026 14.3462 10.9623 14.0042 11.7393C13.6622 12.5163 13.1015 13.1769 12.3905 13.6408C11.6795 14.1046 10.8489 14.3516 10 14.3516C9.15108 14.3516 8.3205 14.1046 7.60951 13.6408C6.89852 13.1769 6.33783 12.5163 5.99581 11.7393C5.65378 10.9623 5.54518 10.1026 5.68326 9.26502C5.82134 8.4274 6.20012 7.64805 6.77344 7.02197" stroke="#696969" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              </svg> Courses
            </li>

            <li className={` mainlink ${selectedPage === 'myaccount' ? 'activateding' : ''}`} onClick={() => handleNavigationClick('myaccount')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M10 13.1001C12.7614 13.1001 15 10.8615 15 8.1001C15 5.33867 12.7614 3.1001 10 3.1001C7.23858 3.1001 5 5.33867 5 8.1001C5 10.8615 7.23858 13.1001 10 13.1001Z" stroke="#696969" stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M2.42188 17.4751C3.18979 16.1447 4.2944 15.0399 5.62465 14.2718C6.9549 13.5037 8.46392 13.0994 10 13.0994C11.5361 13.0994 13.0451 13.5037 14.3753 14.2718C15.7056 15.0399 16.8102 16.1447 17.5781 17.4751" stroke="#696969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg> My Account
            </li>
            <li className={` mainlink ${selectedPage === 'newcoursebuy' ? 'activateding' : ''}`} onClick={() => handleNavigationClick('newcoursebuy')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M17.9917 12.5H5.54167L5.65 13.4333C5.7 13.85 6.05833 14.1667 6.475 14.1667H16.6583V15.8333H6.48333C5.21667 15.8333 4.15 14.8833 4 13.625L2.675 2.4C2.625 1.98333 2.26667 1.66667 1.85 1.66667H0V0H1.85C3.11667 0 4.18333 0.95 4.33333 2.20833L4.36667 2.5H8.33333V4.16667H4.56667L5.35 10.8333H16.6333L17.9667 4.16667H13.3417V2.5H20L18 12.5H17.9917ZM5.83333 16.6667C4.91667 16.6667 4.16667 17.4167 4.16667 18.3333C4.16667 19.25 4.91667 20 5.83333 20C6.75 20 7.5 19.25 7.5 18.3333C7.5 17.4167 6.75 16.6667 5.83333 16.6667ZM14.1667 16.6667C13.25 16.6667 12.5 17.4167 12.5 18.3333C12.5 19.25 13.25 20 14.1667 20C15.0833 20 15.8333 19.25 15.8333 18.3333C15.8333 17.4167 15.0833 16.6667 14.1667 16.6667ZM7.40833 6.43333L9.65 8.675C9.975 9 10.4 9.15833 10.825 9.15833C11.25 9.15833 11.675 9 12 8.675L14.2333 6.44167L13.0583 5.26667L11.6583 6.66667V0H9.99167V6.66667L8.58333 5.25833L7.40833 6.43333Z" fill="#696969"/>
</svg>  Buy  Another Course
            </li>
            <Link to="/logout">
              <li className="mainlink">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path d="M13.5938 7.31885L16.875 10.6001L13.5938 13.8813" stroke="#696969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.125 10.6001H16.875" stroke="#696969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.125 17.4751H3.75C3.58424 17.4751 3.42527 17.4093 3.30806 17.292C3.19085 17.1748 3.125 17.0159 3.125 16.8501V4.3501C3.125 4.18434 3.19085 4.02537 3.30806 3.90816C3.42527 3.79095 3.58424 3.7251 3.75 3.7251H8.125" stroke="#696969" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>   Logout
              </li></Link>


          </ul>
        </div>
      </div>
      <div className="main-std-dash">
        <div className="Mobile_Nav_Std">

          <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{ width: "100%" }}>
            <div class="container-fluid">
              <img className="navbar-brand" src={logo} alt="complogo" />
          
              <div style={{ border: "none" }} className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={handleToggle}>
                {openNav ? (
                  <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M25 7L7 25" stroke="#FBB723" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M25 25L7 7" stroke="#FBB723" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                ) : (
                  <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M6.25 20H33.75" stroke="#FBB723" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.25 10H33.75" stroke="#FBB723" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.25 30H33.75" stroke="#FBB723" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                )}
              </div>
         
            </div>
          </nav>
        </div>
        <div className={`overlay bg-light ${openNav ? "show" : ""}`} onClick={closeNavbar}>

        <ul 
        className={`navbar-nav mt-3 ${
          openNav ? "expanded" : ""
        }`}>
          <Link to="/">

<li className=" mainlink">
<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M11.875 16.8501V13.1001C11.875 12.9344 11.8092 12.7754 11.6919 12.6582C11.5747 12.541 11.4158 12.4751 11.25 12.4751H8.75C8.58424 12.4751 8.42527 12.541 8.30806 12.6582C8.19085 12.7754 8.125 12.9344 8.125 13.1001V16.8501C8.125 17.0159 8.05915 17.1749 7.94194 17.2921C7.82473 17.4093 7.66576 17.4751 7.5 17.4751H3.75C3.58424 17.4751 3.42527 17.4093 3.30806 17.2921C3.19085 17.1749 3.125 17.0159 3.125 16.8501V9.62358C3.1264 9.53708 3.14509 9.45174 3.17998 9.37258C3.21486 9.29342 3.26523 9.22204 3.32812 9.16264L9.57812 3.48296C9.69334 3.37755 9.84384 3.31909 10 3.31909C10.1562 3.31909 10.3067 3.37755 10.4219 3.48296L16.6719 9.16264C16.7348 9.22204 16.7851 9.29342 16.82 9.37258C16.8549 9.45174 16.8736 9.53708 16.875 9.62358V16.8501C16.875 17.0159 16.8092 17.1749 16.6919 17.2921C16.5747 17.4093 16.4158 17.4751 16.25 17.4751H12.5C12.3342 17.4751 12.1753 17.4093 12.0581 17.2921C11.9408 17.1749 11.875 17.0159 11.875 16.8501Z"
                      stroke="#696969"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg> Homepage
</li></Link>
<li className={`  mainlink ${selectedPage === 'courses' || selectedPage === 'information' ? 'activateding' : ''}`} onClick={() => handleNavigationClick(loca)}>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
    <path d="M2.5 5.6001V11.8501" stroke="#696969" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4.23438 17.4751C4.85974 16.5159 5.71451 15.7279 6.72128 15.1824C7.72804 14.637 8.85497 14.3513 10 14.3513C11.145 14.3513 12.272 14.637 13.2787 15.1824C14.2855 15.7279 15.1403 16.5159 15.7656 17.4751" stroke="#696969" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M17.5 5.6001L10 8.1001L2.5 5.6001L10 3.1001L17.5 5.6001Z" stroke="#696969" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13.2266 7.02197C13.7999 7.64805 14.1787 8.4274 14.3167 9.26502C14.4548 10.1026 14.3462 10.9623 14.0042 11.7393C13.6622 12.5163 13.1015 13.1769 12.3905 13.6408C11.6795 14.1046 10.8489 14.3516 10 14.3516C9.15108 14.3516 8.3205 14.1046 7.60951 13.6408C6.89852 13.1769 6.33783 12.5163 5.99581 11.7393C5.65378 10.9623 5.54518 10.1026 5.68326 9.26502C5.82134 8.4274 6.20012 7.64805 6.77344 7.02197" stroke="#696969" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
  </svg> Courses
</li>

<li className={` mainlink ${selectedPage === 'myaccount' ? 'activateding' : ''}`} onClick={() => handleNavigationClick('myaccount')}>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
    <path d="M10 13.1001C12.7614 13.1001 15 10.8615 15 8.1001C15 5.33867 12.7614 3.1001 10 3.1001C7.23858 3.1001 5 5.33867 5 8.1001C5 10.8615 7.23858 13.1001 10 13.1001Z" stroke="#696969" stroke-width="1.5" stroke-miterlimit="10" />
    <path d="M2.42188 17.4751C3.18979 16.1447 4.2944 15.0399 5.62465 14.2718C6.9549 13.5037 8.46392 13.0994 10 13.0994C11.5361 13.0994 13.0451 13.5037 14.3753 14.2718C15.7056 15.0399 16.8102 16.1447 17.5781 17.4751" stroke="#696969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  </svg> My Account
</li>
<li className={` mainlink ${selectedPage === 'newcoursebuy' ? 'activateding' : ''}`} onClick={() => handleNavigationClick('newcoursebuy')}>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M17.9917 12.5H5.54167L5.65 13.4333C5.7 13.85 6.05833 14.1667 6.475 14.1667H16.6583V15.8333H6.48333C5.21667 15.8333 4.15 14.8833 4 13.625L2.675 2.4C2.625 1.98333 2.26667 1.66667 1.85 1.66667H0V0H1.85C3.11667 0 4.18333 0.95 4.33333 2.20833L4.36667 2.5H8.33333V4.16667H4.56667L5.35 10.8333H16.6333L17.9667 4.16667H13.3417V2.5H20L18 12.5H17.9917ZM5.83333 16.6667C4.91667 16.6667 4.16667 17.4167 4.16667 18.3333C4.16667 19.25 4.91667 20 5.83333 20C6.75 20 7.5 19.25 7.5 18.3333C7.5 17.4167 6.75 16.6667 5.83333 16.6667ZM14.1667 16.6667C13.25 16.6667 12.5 17.4167 12.5 18.3333C12.5 19.25 13.25 20 14.1667 20C15.0833 20 15.8333 19.25 15.8333 18.3333C15.8333 17.4167 15.0833 16.6667 14.1667 16.6667ZM7.40833 6.43333L9.65 8.675C9.975 9 10.4 9.15833 10.825 9.15833C11.25 9.15833 11.675 9 12 8.675L14.2333 6.44167L13.0583 5.26667L11.6583 6.66667V0H9.99167V6.66667L8.58333 5.25833L7.40833 6.43333Z" fill="#696969"/>
</svg> Buy  Another Course
</li>
<Link to="/logout">
  <li className="mainlink ">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <path d="M13.5938 7.31885L16.875 10.6001L13.5938 13.8813" stroke="#696969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.125 10.6001H16.875" stroke="#696969" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.125 17.4751H3.75C3.58424 17.4751 3.42527 17.4093 3.30806 17.292C3.19085 17.1748 3.125 17.0159 3.125 16.8501V4.3501C3.125 4.18434 3.19085 4.02537 3.30806 3.90816C3.42527 3.79095 3.58424 3.7251 3.75 3.7251H8.125" stroke="#696969" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>   Logout
  </li></Link>

</ul>
        </div>
        {renderPage()}
      </div>
    </div>
  )
}
export default StudentNav