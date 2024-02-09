import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthenticationStudent from "../pages/AuthenticationStudent.jsx";
import HeaderFooter from "../components/global/HeaderFooter";
import ContactUs from "../pages/ContactUs";
import NotFound from "../components/404";
import HomeMain from "../pages/HomeMain";
import Homepage from "../Studentdashboard/Homepage";
import AddLessonForm from "./AddLessonForm";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import Studypage from "../Studentdashboard/Studypage.jsx";
import Quize from "../Studentdashboard/Quiz.jsx";
import QuizLesson from "../Studentdashboard/QuizLessons.jsx";
import Allchap from "../Studentdashboard/Allchap.jsx";
import Logout from "../Studentdashboard/Logout.jsx"
import Alltext from "../Studentdashboard/Alltext.jsx"
import Loader from "../Studentdashboard/Loader.jsx";
const AppRoutes = () => {
  const [userId, setUserId]=useState(null)

  useEffect(() => {
    const personId = localStorage.getItem("userId");
    if (personId) {
      const decoded = jwtDecode(personId);
      setUserId(decoded);
    }
  }, []);
  return (
    <Router>
      <div
        className=""
        style={{
          maxHeight: "fit-content",
        }}
      >
        <Routes>
          {/* ================= Public Routes Started */}
         
             <Route
            path="login"
            element={
                <AuthenticationStudent />
            }
          />
           <Route
            path="/logout"
            element={
             <Logout/>
            }
          />
            
          
<Route
path="/loader"
element={
  <Loader/>
}/>
     
    <Route
      path="/quiz/:id"
      element={
        <QuizLesson />
      }
    />
  

    <Route
      path="/test/:index/:chap"
      element={
        <Quize />
      }
    />
  

    <Route
      path="/Alllessons/:id"
      element={
        <Allchap/>
      }
    />
  
          <Route
            path="/"
            element={
              <HeaderFooter>
                <HomeMain />
              </HeaderFooter>
            }
          />
      



    <Route
      path="/StudentLesson/:id/:index"
      element={
        <Studypage />
      }
    />
  




 


          
          <Route
            path="/contact-us"
            element={
              <HeaderFooter>
                <ContactUs />
              </HeaderFooter>
            }
          />



          {/* ================= Public Routes Started Ended */}


          {/* ============== Admin Routes Ended  */}
          <Route path="/studentdash/*" element={<Homepage />} />

          <Route
            path="/*"
            element={
              <HeaderFooter>
                <NotFound />
              </HeaderFooter>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
export default AppRoutes;
