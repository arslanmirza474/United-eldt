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
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx"
import Loader from "../Studentdashboard/Loader.jsx";
import HomeofclassaSpanish from "../pages/Spanish/HomeofclassaSpanish.jsx"
import {
  Elements
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StudentNav from "../Studentdashboard/StudentNav.jsx";
import Homeofclassa from "../pages/Homeofclassa.jsx";
import TermsAndCondition from "../pages/TermsAndCondition.jsx";
import LoaderAnimationSVGComponent from "../components/Home/LoaderAnimationSVGComponent.jsx";
import ClassB from "../pages/ClassB.jsx";
import ClassBSpanishSpanish from "../pages/Spanish/ClassBSpanish.jsx";
import Navigate from "../pages/Naviagte.jsx";
import SliderPage from "../components/Home/Sliderpage.jsx";


const stripePromise = loadStripe('pk_test_51O5F9gFZtgAr5eHPPYRptE8ZBDBXAtaLj7XGBnSp106qIqacE80PBnqGyndDPhtDYDpBWNvpJ8YmObgxijiNX22o00C8ueO5lb'); // Replace with your actual public key

const AppRoutes = () => {
  const [userId, setUserId] = useState(null)

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
            path="/login"
            element={
              <AuthenticationStudent />
            }
          />

          <Route
            path="/classa/:pglan"
            element={

              <Navigate />

            }
          />
          <Route
            path="/privacy"
            element={
              <HeaderFooter>
                <PrivacyPolicy />

              </HeaderFooter>

            }
          />
          <Route
            path="/Loading"
            element={

              <LoaderAnimationSVGComponent />


            }
          />
          <Route
            path="/classB"
            element={
              <HeaderFooter>

                <ClassB />
              </HeaderFooter>



            }
          />
          <Route
            path="/termandconditions"
            element={
              <HeaderFooter>
                <TermsAndCondition />

              </HeaderFooter>

            }
          />

          <Route
            path="/logout"
            element={
              <Logout />
            }
          />
          <Route
            path="/loader"
            element={
              <Loader />
            } />

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
              <Allchap />
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
<Route path="/slider"
element={
  <SliderPage/>
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
          <Route path="/studentdash" element={<Homepage />} />
          <Route path="/studentdash/:local" element={<Homepage />} />
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
