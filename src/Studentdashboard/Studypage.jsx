import { useEffect, useState } from "react";
import { useNavigate, useParams,Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import "./coursetitle.css";
import { Switch, Slider, Progress, Modal } from 'antd';
import Navba from "./Navba";
import Loader from "./Loader";
import LoaderAnimationSVGComponent from "../components/Home/LoaderAnimationSVGComponent";

function Studypage() {
  const [chapters, setChapters] = useState([]);
  const [page, setPage] = useState([]);
  const [userId, setUserId] = useState("");
  const [chaptertitles, setChaptertitles] = useState([]);
  const [studentprogress, setStudentprogress] = useState([]);
  const [chapti, setChapti] = useState("Select Lesson");
const navigate = useNavigate()
  const { id } = useParams();
  const {index}=useParams()
useEffect(()=>{
  localStorage.setItem("chapindex", index)
  localStorage.setItem("lessonid", id)
},[])
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [chapterIndex, setChapterIndex] = useState(index);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

const [quiz,setQuiz]=useState("")
  const handleChapterClick = (index, title) => {
    setChapterIndex(index);
    localStorage.setItem("chapindex", chapterIndex)
    localStorage.setItem("lessonid", id)
    setChapti(title);
    setPage(chapters[index].pages[0]);
    setTotalPages(chapters[index].pages.length);
    setCurrentPageIndex(0);
  };

  const handleNextPageClick = () => {
 
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Adds smooth scrolling behavior
    });
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex((prevIndex) => prevIndex + 1);
      setPage(chapters[chapterIndex].pages[currentPageIndex + 1]);
    } else {
      // Navigate to "/students" if there is no next page
      navigate(`/test/${id}/${chapterIndex}`);
     
    }
  };
  

  const handlePreviousPageClick = () => {

    window.scrollTo({
      top: 100,
      behavior: 'smooth' // Optional: Adds smooth scrolling behavior
    });
    if (currentPageIndex > 0) {
      setCurrentPageIndex((prevIndex) => prevIndex - 1);
      setPage(chapters[chapterIndex].pages[currentPageIndex - 1]);
    }
  };

  useEffect(() => {
 
    const personId = localStorage.getItem("userId");
  
    if (personId) {
      const decoded = jwtDecode(personId);
      setUserId(decoded.id);
    }
      if (userId) {
      const fetchData = async () => {
        setLoading(true)
        try {
          const response = await axios.get(`https://server-of-united-eldt.vercel.app/api/getCourseChapters/${userId}/${id}`);
          setChapters(response.data.chapters);
          setStudentprogress(response.data.studentProgress);
          setQuiz(response.data.quizid)
          fetchChaptersTitles();
          // Set initial state only if chapters are available
          if (response.data.chapters.length > 0) {
            setPage(response.data.chapters[chapterIndex].pages[0]);
            setTotalPages(response.data.chapters[chapterIndex].pages.length);
          }
        } catch (error) {
          console.error("Error fetching chapters:", error);
        } finally {
          setLoading(false);
        }
      };
  
      // Call fetchData
      fetchData();
    }
  }, [userId]);
  
  

  const fetchChaptersTitles = async () => {
    try {
      const response = await axios.get(`https://server-of-united-eldt.vercel.app/api/getChapterTitles/${userId}/${id}`);
      setChaptertitles(response.data.chapters);
      if (response.data.chapters.length > 0) {
        setChapti(response.data.chapters[chapterIndex].title);
      }
    } catch (error) {
      console.error("Error fetching chapter titles:", error);
    }
  };
  function toCamelCase(str) {
    // Convert the string to lowercase and split it into words
    const words = str.toLowerCase().split(' ');

    // If there are more than two words, truncate and add ellipsis
    if (words.length > 2) {
        // Slice the array to get the first two words
        const truncatedWords = words.slice(0, 2);
        // Capitalize the first letter of each word
        for (let i = 0; i < truncatedWords.length; i++) {
            truncatedWords[i] = truncatedWords[i].charAt(0).toUpperCase() + truncatedWords[i].slice(1);
        }
        // Join the truncated words and add ellipsis
        return truncatedWords.join(' ') + '...';
    } else {
        // Capitalize the first letter of each word
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        // Join the words back together with spaces and return
        return words.join(' ');
    }
}



    return (
      <div className="learning">
        <Navba page={"Alllessons"} chapterid={id}/>
      {/* <div className="progressgra d-flex">
  <div className="displaypro" style={{ width: `${studentprogress.progressPercentage}%`, backgroundColor: '#FBB723',height:"100%" }}><span style={{display:"flex", margin:"auto", textAlign:"center", alignItems:"center",justifyContent:"center"}} className="percentshow">{Math.round(studentprogress.progressPercentage)}%</span></div>
  
</div> */}
       <div className="progressgra d-flex text-center" style={{color:"black",background: "#C9C8C5"}}>
       
       <div className="displaypro " style={{ width: `${studentprogress.progressPercentage || 0}%`, backgroundColor: '#FBB723', height: "100%" }}>
<span className="perceval">
 {isNaN(studentprogress.progressPercentage) ? 0 : Math.round(studentprogress.progressPercentage)}%
</span>
</div> 

</div>
<div className="backbutton mt-3" style={{width:"90%"}}>  <Link to={`/Alllessons/${id}`}>
                  <span className="bolding"><i class="fa-solid fa-arrow-left-long"></i><span className="mx-2">Back</span> </span>

        </Link></div>


        {
              loading ?(<div className="d-flex justify-content-center" style={{height:"60vh"}}>
              <LoaderAnimationSVGComponent/>
              </div>):(
      <div >
       <button className="prebtn" onClick={handlePreviousPageClick} disabled={currentPageIndex === 0}>
              <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 86 86" fill="none">
  <path d="M53.75 69.875L26.875 43L53.75 16.125" stroke="#2C292A" stroke-width="9.55556" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>
        <div className="main-contain-">
          <div className="card-head headertwo">
 
<div className="d-flex mainpro align-items-center gap-2">
</div>
</div>
          <div className="card-con">
            <div className="titles">
            <div className="dropdown">
            
<span  type="button" data-bs-toggle="dropdown" aria-expanded="false">
{chapti}
    <i class="fa-solid fa-angle-down mt-1 mx-3"></i>
</span>
              <div style={{overflowY:"scroll", height:"500px"}} className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {chaptertitles.map((chapter, index) => (
                  <div
                    key={index}
                    className={`dropcon dropdown-item ${chapter.available ? "" : "disabled"}`}
                    onClick={() => handleChapterClick(index, chapter.title)}
                  >
                    {chapter.available ? (
                      <>
                      <div>{index +1}. <span style={{ color: "#2C292A" }}>{toCamelCase(chapter.title)}</span></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#FBB723" stroke-width="2" stroke-miterlimit="10"/>
  <path d="M20 16L14 12V20L20 16Z" stroke="#FBB723" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      </>
                    ) : (
                      <>
                      <div>{index +1}. <span style={{ color: "#2C292A" }}>{toCamelCase(chapter.title)}</span></div>
                       
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M26 11H6C5.44772 11 5 11.4477 5 12V26C5 26.5523 5.44772 27 6 27H26C26.5523 27 27 26.5523 27 26V12C27 11.4477 26.5523 11 26 11Z" stroke="#2C292A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.5 11V6.5C11.5 5.30653 11.9741 4.16193 12.818 3.31802C13.6619 2.47411 14.8065 2 16 2C17.1935 2 18.3381 2.47411 19.182 3.31802C20.0259 4.16193 20.5 5.30653 20.5 6.5V11" stroke="#2C292A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 20.5C16.8284 20.5 17.5 19.8284 17.5 19C17.5 18.1716 16.8284 17.5 16 17.5C15.1716 17.5 14.5 18.1716 14.5 19C14.5 19.8284 15.1716 20.5 16 20.5Z" fill="#2C292A"/>
</svg>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>  
            <div className="pagelen d-flex align-items-center gap-2">
                  <span className="activepage">{currentPageIndex + 1}</span>  of <span className="totalpage">{totalPages}</span>
      
            </div>
          
            </div>
            <div className="contentdiv ">
   <div className="p-3" dangerouslySetInnerHTML={{ __html: page.description }} />
   {page.image !== "" ? (
  <img src={page.image} alt="explainimage" className="descimage"/>
) : (
  <></>
)}
<div className="pagebuttons">
  <button className="previousbutton"  onClick={handlePreviousPageClick}><i class="fa-solid fa-angle-left"></i>Previous</button>
<button className="previousbutton" onClick={handleNextPageClick}>Next<i class="fa-solid fa-angle-right"></i></button>
</div>
          </div>
          
         
         

          </div>
        </div> 
      </div>   
          )
            }
        <button className="nextbtn" onClick={handleNextPageClick} >
              <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" viewBox="0 0 86 86" fill="none">
  <path d="M32.25 16.125L59.125 43L32.25 69.875" stroke="#2C292A" stroke-width="9.55556" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>
            <Modal
  title="Information"
  open={modalVisible}
  onOk={() => setModalVisible(false)}
  onCancel={() => setModalVisible(false)}
  footer={null}
>
 hello this chapter is been completed
</Modal>

<div className="footerforstudy">
Copyright 2024, United ELDT
</div>
      </div>
      
    );
  }
  
  export default Studypage;























  
  