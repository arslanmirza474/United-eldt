import bannerimage from "../components/Home/images/Selo.svg"
import CircularLogoSvg from "../components/Home/CircularLogoSvg"
function Cardforclassa(){
    return(
        <div className="coverofCarda">
        <div className="coverofcircularlogo">
<CircularLogoSvg/>
</div>
      <div className="Main_div_of_cards">
        <div className="content_of_carda">
            <div className="desc_class_a">
          <span className="descontent">Get your CDL GUARANTEED </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M22 12.8086H18L15 21.8086L9 3.80859L6 12.8086H2" stroke="#2C292A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
 <div className="titletextof_card">
        FMCSA certified course, start today with United ELDT
        </div>
<div className="explain_text">
Get your CDL quickly with United ELDT proven system; over 10,000 students have successfully completed their ELDT theory training. 
</div>

        </div>
        <div className="Left_side_cardsa">
        <div className="button_a">
          50% OFF
        </div>
        <div className="discountedprice">
              <svg className="linesvg" xmlns="http://www.w3.org/2000/svg" width="85" height="2" viewBox="0 0 85 2" fill="none">
          <path d="M85 1L2.86102e-06 1" stroke="url(#paint0_linear_3693_14084)" />
          <defs>
            <linearGradient id="paint0_linear_3693_14084" x1="6.35906e-07" y1="1.50005" x2="77.6953" y2="1.49995" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FF3030" />
              <stop offset="1" stop-color="#FF3030" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="pricer">

          $100.00
        </div>
        </div>
      
        <div className="Main_price_area2">
          $50.00
        </div>
        <a href="#topofhead">
           <div className="BuyNowforCars" >
        🚚.💨 Buy now
        </div>
        </a>
       
        </div>
       

      </div>
        </div>
    )
}
export default Cardforclassa;