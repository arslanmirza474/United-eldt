import { useEffect, useState } from "react";
import "./first.css";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Link } from "react-router-dom";
import { Progress, Space } from 'antd';
import Loader from "./Loader";
import certificateim from "./certificateimage.png"
import jsPDF from 'jspdf';

function Coursedetail() {
  const [userId, setUserId] = useState("");
  const [comp, setComp] = useState([]);
  const [uncomp, setUncomp] = useState([]);
const [loading, setLoading] = useState(true)
const [responsedata, setResponsedata] = useState('');

  useEffect(() => {
    const personId = localStorage.getItem("userId");
    if (personId) {
      const decoded = jwtDecode(personId);
      setUserId(decoded.id);
      fetchUserInfo();
    
    }
  }, [userId]);
  const generator =(courplace)=>{
    fetchstudentdata(courplace)
  }
  const fetchstudentdata = (courplace) => {
    axios.get(`https://server-of-united-eldt.vercel.app/api/studentinformation/?studentId=${userId}&enrolledIndex=${courplace}`)
      .then(res => {
        setResponsedata(res.data);
        generateCertificate()
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });
  };
  const fetchUserInfo = () => {
    setLoading(true)
    axios
      .get(`https://server-of-united-eldt.vercel.app/api/student/${userId}/courses`)
      .then((res) => {
        setComp(res.data.completedCourses);
        setUncomp(res.data.uncompletedCourses);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching user info:", error);
      });
  };
  const generateCertificate = () => {
    // Create a new jsPDF instance with landscape orientation
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm', // Use millimeters as the unit
    });
  
    // Create a temporary canvas to draw the image and text
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
    // Load the certificate background image
    const backgroundImage = new Image();
    backgroundImage.src = certificateim;
  
    backgroundImage.onload = () => {
      // Set canvas dimensions based on the image size
      canvas.width = backgroundImage.width;
      canvas.height = backgroundImage.height;
  
      // Draw the background image
      ctx.drawImage(backgroundImage, 0, 0);
  
      // Add name to the canvas (centered and bold)
      ctx.font = 'bold 40px Arial';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.fillText(responsedata.studentName, canvas.width / 2, canvas.height / 2);
  
      // Add course name to the canvas (centered and smaller font size)
      const courseNameText = `For Completing the ${responsedata.courseName}`;
      ctx.font = '15px Arial';
      ctx.fillText(courseNameText, canvas.width / 2, canvas.height / 2 + 40);
  
// Add score text (centered and smaller font size)
// Add score text (centered and smaller font size)
const scoreText = `${responsedata.studentfirstname} Scored: `;
ctx.font = '15px Arial';
ctx.textAlign = 'center';
ctx.fillText(scoreText, canvas.width / 2 - 20, canvas.height / 2 + 70); // Decrease margin top and set margin left

// Add percentage text (bold and larger font size) directly after the score text
const roundedPercentage = responsedata.percentage.toFixed(1) + '%';
ctx.font = 'bold 16px Arial';
const margin = 45; // Adjust the margin as needed
const textWidth = ctx.measureText(roundedPercentage).width;
ctx.fillText(roundedPercentage, canvas.width / 2 + ctx.measureText(scoreText).width - textWidth - margin - 20, canvas.height / 2 + 70); // Add 20px margin-left

      // Convert canvas to data URL
      const dataUrl = canvas.toDataURL();
  
      // Add the image to the PDF
      doc.addImage(dataUrl, 'JPEG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
  
      // Save the PDF
      doc.save('United ELDT Certificate.pdf');
    };
  };
  return (
    <div>
      <style>
        {`
          .accordion-button:focus {
            box-shadow: none;
            border-radius: 16px;
            background: #F5F5F5;
          } 
          .accordion-button{
            box-shadow: none;
            border-radius: 16px;
            background: #F5F5F5;
          }
         
          .accordion-item{
            border-radius: 16px;
            border:none;
            background: #F5F5F5;
          }
         
         
          .progress-bar {
            height: 20px;
            border-radius: 10px;
            background: grey;
          }
          .progress-fill {
            height: 100%;
            background: yellow;
          }
          .chart-container {
            position: relative;
            width: 100; // Adjust as needed
            height: 100px; // Adjust as needed
          }
        `}
      </style>
      <div className="backbtn">
           <Link to="/">
                  <span className="bolding"><i class="fa-solid fa-arrow-left-long"></i><span className="mx-2">Back</span> </span>

        </Link>
      </div>
   {
    loading ?(<Loader/>):(
         <div className="main-contain-regist">
        <div className="card-head">My Courses</div>
        <div className="card-body">
        <div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <div class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <label className="mainlabel">Courses - Actives</label>
                <i class="accordion-arrow fas fa-chevron-down"></i> 
            </div>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                <span>
                    {uncomp.map((course,index) => (
                        <>
                            <div className="progress-bar-container mainlabel">
                                <div>
                                    <Space wrap>
                                        <Progress
                                            type="circle"
                                            percent={parseFloat(course.studentProgress)}
                                            size={80}
                                            strokeColor="#FBB723"  // Change color to #FBB723
                                            strokeWidth={20}       // Increase thickness to 10 (you can adjust this value)
                                            format={() => null}
                                        />
                                    </Space>
                                    <span className="newlineitem">{course.courseName} - {course.courselangugae}</span>
                                </div>
                                <Link to={`/Alllessons/${course.enrollindex}`}>
                                    <div className="warning">Open</div>
                                </Link>
                            </div>
                        </>
                    ))}
                </span>
            </div>
        </div>
    </div>
</div>

          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingtwo">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsetwo"
                  aria-expanded="true"
                  aria-controls="collapsetwo"
                >
                  <label className="mainlabel">Quizzes</label>
                  <i class="accordion-arrow fas fa-chevron-down"></i> 

                </button>
              </h2>
              <div
                id="collapsetwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingtwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <span>
                    {uncomp.map((course,index) => (
                      <>
                        <div className="progress-bar-container mainlabel">
                <div>     <Space wrap>
  <Progress
    type="circle"
    percent={parseFloat(course.studentProgress)}
    size={80}
    strokeColor="#FBB723"  // Change color to #FBB723
    strokeWidth={20}       // Increase thickness to 10 (you can adjust this value)
    format={() => null}
  />
</Space>
<span className="newlineitem">{course.courseName} - {course.courselangugae}</span>  


                          </div>   
                          <Link to={`/quiz/${course.enrollindex}`}>
                          <div className="warning">Open</div></Link>
                        </div>
                      </>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingthree">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsethree"
                  aria-expanded="true"
                  aria-controls="collapsethree"
                >
                  <label className="mainlabel">Courses - Completed</label>
                  <i class="accordion-arrow fas fa-chevron-down"></i> 

                </button>
              </h2>
              <div
                id="collapsethree"
                class="accordion-collapse collapse"
                aria-labelledby="collapsethree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <span>
                    {comp.map((course) => (
                      <>
                        <div className="progress-bar-container mainlabel ">
                     <div>  <Space wrap>
  <Progress
    type="circle"
    percent={parseFloat(course.studentProgress)}
    size={80}
    strokeColor="#FBB723"  // Change color to #FBB723
    strokeWidth={20}       // Increase thickness to 10 (you can adjust this value)
    format={() => null}
  />
</Space>
<span className="newlineitem">{course.courseName} - {course.courselangugae}</span>  
   

                          </div> 
                          <Link >
                          <div className="warning" onClick={()=>{generator(course.enrollindex)}}>Certificate</div></Link>
                        </div>
                      </>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
   }
   
    </div>
  );
}

export default Coursedetail;
