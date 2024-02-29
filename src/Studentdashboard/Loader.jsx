import React from 'react';
import './Loader.css'; // Import CSS for styling
import sitelogo from "./LOGO ELDT 2024 04 Artboard 5.svg"
import loaderimage from "./loaderimage.png"
import { RotatingLines } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div className='logocon'>
      <div className='maincontainer'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100" stroke="#f5b505" speed="0.75" data-testid="rotating-lines-svg" aria-label="rotating-lines-loading" aria-busy="true" role="progressbar" class="sc-dmyCSP cXeqit"><polyline points="24,12 24,4" width="3" transform="rotate(0, 24, 24)" class="sc-hLQSwg jqMhbM"></polyline><polyline points="24,12 24,4" width="3" transform="rotate(30, 24, 24)" class="sc-hLQSwg jqMhbM"></polyline><polyline points="24,12 24,4" width="3" transform="rotate(60, 24, 24)" class="sc-hLQSwg jqMhbM"></polyline><polyline points="24,12 24,4" width="3" transform="rotate(90, 24, 24)" class="sc-hLQSwg jqMhbM"></polyline><polyline points="24,12 24,4" width="3" transform="rotate(120, 24, 24)" class="sc-hLQSwg jqMhbM"></polyline><polyline points="24,12 24,4" width="3" transform="rotate(150, 24, 24)" class="sc-hLQSwg jqMhbM"></polyline><polyline points="24,12 24,4" width="3" transform="rotate(180, 24, 24)" class="sc-hLQSwg jqMhbM"></polyline><polyline points="24,12 24,4" width="3" transform="rotate(210, 24, 24)" class="sc-hLQSwg jqMhbM"></polyline><polyline points="24,12 24,4" width="3" transform="rotate(240, 24, 24)" class="sc-hLQSwg jqMhbM"></polyline><polyline points="24,12 24,4" width="3" transform="rotate(270, 24, 24)" class="sc-hLQSwg jqMhbM"></polyline><polyline points="24,12 24,4" width="3" transform="rotate(300, 24, 24)" class="sc-hLQSwg jqMhbM"></polyline><polyline points="24,12 24,4" width="3" transform="rotate(330, 24, 24)" class="sc-hLQSwg jqMhbM"></polyline></svg>
    
    <div  style={{display:"none"}}>
            <RotatingLines
  visible={true}
  height="80"
  width="96"
  color="#ebb31a" // Change color to orange
  strokeWidth="3"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{color:"#ebb31a"}}
  wrapperClass=""
/>
    </div>


    </div>
    
    </div>
  
  );
};

export default Loader;
