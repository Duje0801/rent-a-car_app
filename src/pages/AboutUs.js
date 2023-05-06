import { useContext } from "react";
import { AppContext } from "../context/Context";
import Navigation from "../components/Navigation";
import Chat from "../components/Chat";
import Translations from "../data/translations";
import frontImg from "../img/frontImg.jpg";
import "../style/pages/aboutUs.css";

function AboutUs() {
  const { language } = useContext(AppContext);

  const translations = Translations();

  return (
    <div>
      <div className="frontA">
        <Navigation />
        <img src={frontImg} alt="frontImage" className="frontImageA" />
        <div className="aboutUsA">
          <div>{translations.aboutUs}</div>
          <div className="aboutUsTextA">
            <p>
              {language === `en`
                ? `Oldtimer Rent-A-Car is a Croatian car rental company that was founded in 2015
                        with its first location in Split.`
                : `Oldtimer Rent-A-Car je tvrtka za iznajmljivanje automobila osnovana 2015. Splitu.`}
            </p>
            <p>
              {language === `en`
                ? `The company specializes in providing classic and vintage
                            cars for rental, catering to customers who are looking for a unique driving experience on
                            the scenic roads of Croatia.`
                : `Tvrtka je specijalizirana za iznajmljivanje oldtimer automobila 
                             kupcima koji traže jedinstveno iskustvo vožnje cestama Hrvatske.`}
            </p>
            <p>
              {language === `en`
                ? `Since its inception, Oldtimer Rent-A-Car has expanded to five locations throughout Croatia,
                            including Dubrovnik, Zagreb, Zadar, and Pula.`
                : `Od svog osnutka Oldtimer Rent-A-Car proširio se na ukupno pet lokacija diljem Hrvatske.
                            Osim početne lokacije u Splitu, tvrtka posluje i u Dubrovniku, Zagrebu, Zadru i Puli.
                            `}
            </p>
            <p>
              {language === `en`
                ? `The company's fleet of well-maintained classic
                            cars and professional customer service has made it a popular choice for both tourists and
                            locals looking to explore Croatia in style.`
                : `Osim dobro održavanih oldtimer
                            automobila u tvrtki radi i profesionalna služba za korisnike koja je "Oldtimer" Rent-a-car učinila 
                            popularnim izborom i za turiste i za lokalno stanovništvo koje želi istražiti Hrvatsku sa stilom.
                            `}
            </p>
          </div>
        </div>
      </div>
      <Chat />
    </div>
  );
}

export default AboutUs;
