import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Translator, Translate } from "react-auto-translate";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import back from "./back.png"

import { useCookies } from "react-cookie";
import logomain from "./ELDT LOGO.svg"
import axios from "axios";
import successmsg from "./Group 6674.png"
import errormsg from "./Group 6674 (2).png"
import { Modal } from "antd";

export default function LoginForm() {
  const [cookies, setCookie] = useCookies();
 const[forget, setForget]=useState(true)
  const languageState = useSelector((state) => state.language);
  const [email, setEmail]=useState("")
  const [emailrecover, setEmailrecover]=useState("")
 const [result, setResult]=useState(false)
 const [password, setPassword]=useState("")
 const [failedlogin, setFailedlogin]=useState(false)
 const [successmodal, setSuccessmodal]=useState(false)
 const [success, setSuccess] = useState(false);
 const [error, setError] = useState(false);
const [process, setProcess]=useState(true)
const [loginatm, setLoginatm]=useState(true)
  const navigate = useNavigate()
const failedclose = ()=>{
  setFailedlogin(false)
}
const successclose = ()=>{
  setSuccessmodal(false)
}
const successemail = ()=>{
  setSuccess(false)
}
const removeerror =()=>{
  setError(false)
}
const gotodash =()=>{
  navigate("/studentdash");
}
const loginpage =()=>{
  setForget(true)
  setSuccess(false)
}
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginatm(false); 
  
    try {
      const response = await axios.post("https://server-of-united-eldt.vercel.app/api/login", {
        Email: email,
        password,
      });
  
      if (response.data.status === "true") {
        localStorage.setItem("userId", response.data.token);
        setSuccessmodal(true)
        // navigate("/studentdash");
      } else {
        setFailedlogin(true)
      }
    } catch (error) {
      // Handle the error here
      console.error("Error during login:", error);
    } finally {
      // Set loginatm back to true after handling the response
      setLoginatm(true);
    }
  };
  
const recoverEmail = async (e) => {
  e.preventDefault();
  setProcess(false);
  setError(false);
  setSuccess(false);

  try {
    const res = await axios.get(`https://server-of-united-eldt.vercel.app/api/studentbyemail/${emailrecover}`);

    if (res.data.status === false) {
      setError(true);
    } else {
      setSuccess(true);
    }
  } catch (error) {
    alert("An error occurred during email recovery");
    // Handle other errors if needed
  } finally {
    setProcess(true);
  }
};



  useEffect(() => {}, []);
  

  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useNavigate();
  const dispatch = useDispatch();
 const handleforget =()=>{
  setForget(false)
 }

 const [typeofinput , setTypeofinput]=useState("password")
 const changeinput = ()=>{
if(typeofinput === "password"){
  setTypeofinput("text")
}else(
  setTypeofinput("password") 
)
 }
  return (
    <>
      <Translator
        from="en"
        to={languageState?.language?.value || "en"}
        googleApiKey="AIzaSyDgnyT5oOl5-vjp6pYSBdxSEAo-GmOquiQ"
      >
        <Link to="/">
                  <span className="bolding"><i class="fa-solid fa-arrow-left-long"></i><span className="mx-2">Back</span> </span>

        </Link>
        <div className="mainlog">
          <img src={logomain} alt="web-logo" style={{width:"323px"}}/>
        </div>
        {
          forget ?(
            <>
             <div className="login-form-container">
          <span className="welcome">
            <Translate>Welcome back</Translate>
          </span>
          <h2>
            <Translate>Log In </Translate>
          </h2>
<span className="logindesc">(First time logging in? Check Your Email for Login Info)</span>
<br></br><br></br><br></br>
          <form>
            <div className="form-group email">
              <label>
                <Translate>Email</Translate>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex. myemail@email.com"
                name="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value.toLowerCase()) }}
                />
            </div>

            <div className="form-group">
              <label>
                <Translate>Password</Translate>
              </label>
              <div className=" form-control controller">
                   <input
                type={typeofinput}
                placeholder="Ex. United2023@"
                name="password"
                
                onChange={(e)=>{setPassword(e.target.value)}}
              />
              <div style={{cursor:"pointer"}} onClick={changeinput}>
                   {
                typeofinput === "password"?(<i class="fa-solid fa-eye"></i>):(<i class="fa-solid fa-eye-slash"></i>)
              }
              </div>
           
              </div>
           
            </div>



            <motion.button type="submit" onClick={handleLogin}>
              {
                loginatm?(<> <Translate>Log In</Translate></>):(<>Please Wait...</>)
              }
             
            </motion.button>

            <div className="row align-items-center">
              <div className="login-forgot-password">
                <span>Forgot your password?</span>
                <Link onClick={handleforget}>
                  <a className="login-lost-password">
                    <Translate>I forgot my password</Translate>
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
            </>
          ):(
            <>  

            <h2>
            <Translate>Forgot my password</Translate>
          </h2>
            <form>
            <div className="form-group email">
              <label>
                <Translate>Email</Translate>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ex. myemail@email.com"
                value={emailrecover}
                onChange={(e) => { setEmail(e.target.value.toLowerCase()) }}
                />
            </div>
            <button type="submit" onClick={recoverEmail} whileTap={{ scale: 0.9 }}>
              {
                process ?(<>
                              <Translate>Password Recovery</Translate>

                </>):(
                  <>
                                                <Translate>Verifying....</Translate>

                  </>
                )
              }
            </button>
            </form>
            </>
          )
        }
       
      </Translator>
    
      <Modal
        open={failedlogin}
        onCancel={failedclose}
        closeIcon={null}
        footer={null} 
       >
<div className="mainbody">
  <div className="imgalign">
    <img src={errormsg} alt="success"/>
  </div>
  <span className="message">Something Went Wrong Please Check your Email or password</span><br></br>
<button className="buybtn" onClick={failedclose}>Try again</button>
</div>
       </Modal>


       {/* //forget password  error*/}
       <Modal
        open={error}
        onCancel={removeerror}
        closeIcon={null}
        footer={null} 
       >
<div className="mainbody">
  <div className="imgalign">
    <img src={errormsg} alt="success"/>
  </div>
  <span className="message" style={{marginTop:"24px"}}> <Translate>This Email is not been registered </Translate></span><br></br>
  <span className="exp" > <Translate>Please enter the valid email to recover your account </Translate></span>
  <button className="buybtn" onClick={removeerror}>Try again</button>

</div>
       </Modal>
       <Modal
        open={successmodal}
        onCancel={successclose}
        closeIcon={null}
        footer={null} 
       >
<div className="mainbody">
  <div className="imgalign">
    <img src={successmsg} alt="success"/>
  </div>
  <span className="message">Congratulations your are successfully login</span><br></br>
  <span className="exp">Now you can start your course</span>
<button className="buybtn" onClick={gotodash}>Go to Dashboard</button>
</div>
       </Modal>

       {/* succes sent email */}
       <Modal
        open={success}
        onCancel={successemail}
        closeIcon={null}
        footer={null} 
       >
<div className="mainbody">
  <div className="imgalign">
    <img src={successmsg} alt="success"/>
  </div>
  <span className="message" style={{marginTop:"24px"}}> <Translate>Your password has been successfully sent to your email. </Translate></span><br></br>
  <span className="exp" > <Translate>Please enter your email inbox and access the password reset email we sent you. With this, you will be able to change your password.</Translate></span>
<button className="buybtn" onClick={loginpage}>Go to Login</button>
</div>
       </Modal>
    </>
  );
}



// : success ?(
//   <>
//   <div className="mainbody">
// <div className="imgalign">

// <img src={successmsg} alt="success"/>
// </div>
// <span className="message" style={{marginTop:"24px"}}> <Translate>Your password has been successfully sent to your email. </Translate></span><br></br>
// <span className="exp" > <Translate>Please enter your email inbox and access the password reset email we sent you. With this, you will be able to change your password.</Translate></span>
// </div>
//   </>
// ):error?(
//   <>
//     <div className="mainbody">
// <div className="imgalign">

// <img src={errormsg} alt="success"/>
// </div>
// <span className="message" style={{marginTop:"24px"}}> <Translate>This Email is not been registered </Translate></span><br></br>
// <span className="exp" > <Translate>Please enter the valid email to recover your account </Translate></span>
// </div>
//   </>
// )