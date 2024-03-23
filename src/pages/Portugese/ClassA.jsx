import "./ClassA.css"
import bannerimage from "../../components/Home/images/Selo.svg"
function ClassA() {



  const scrollup = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="coverofallreview">
      <div className="imageforbannerclassa">
        <img className="rotate-image" src={bannerimage} alt="imageofall" />
      </div>
      <div className="cover_of_classA">

        <div className="desc_class_a">
          <span className="descontent">Obtenha sua CDL GARANTIDA </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M22 12.8086H18L15 21.8086L9 3.80859L6 12.8086H2" stroke="#2C292A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className="title_class_a">
        Curso certificado pela FMCSA, comece hoje mesmo com a United ELDT
        </div>
        <div className="descofclassAtitle">
        Obtenha sua CDL rapidamente com o sistema comprovado da United ELDT; mais de 10.000 alunos concluíram com sucesso seu treinamento teórico ELDT.</div>
        <div className="bottomborder"></div>
        <div className="button_a">
          50% OFF
        </div>
        <svg className="linesvg" xmlns="http://www.w3.org/2000/svg" width="85" height="2" viewBox="0 0 85 2" fill="none">
          <path d="M85 1L2.86102e-06 1" stroke="url(#paint0_linear_3693_14084)" />
          <defs>
            <linearGradient id="paint0_linear_3693_14084" x1="6.35906e-07" y1="1.50005" x2="77.6953" y2="1.49995" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FF3030" />
              <stop offset="1" stop-color="#FF3030" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="priceofclassa">

          $100.00
        </div>
        <div className="Main_price_area">
          $50.00
        </div>
        <div className="BuyNowforclassA" onClick={scrollup}>
        Compre Agora
        </div>
      </div>
      
    </div>
  )
}
export default ClassA;