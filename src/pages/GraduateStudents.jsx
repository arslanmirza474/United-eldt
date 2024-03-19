import Graduatecompany from "./Reviews/GraduateCompanies.svg"
function GraduateStudent (){
    return(
        <div style={{padding:"20px"}}>
      <div className="cover_of_Graduate">
      <div className="course_title">
      The best companies are with us

            </div>
            <div className="explain_text">
            Students who graduated with us are now working in these companies.

            </div>
            <img className="mt-2" src={Graduatecompany} alt="Companies Logo"/>
      </div>
        </div>
    )
}
export default GraduateStudent;