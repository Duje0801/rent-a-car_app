import { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AppContext } from "../context/Context";
import Translations from "../data/translations";
import routes from "../routes/Routes";
import flag1 from "../img/flag1.png";
import flag2 from "../img/flag2.png";
import "../style/components/navigation.css";

function Navigation({ showNavigation }) {
  // In Navigation function I do everything two times because isOpen status is available only in responsive design
  // (when screen width is 1024px or narrower) not in normal (laptop) screen size
  // Also for same reason I used 4 useRefs instead od 2

  //If screen width is 1024px or narrower, user can see div with className navigationN
  //If screen width is 21025px or wider, user can see div with className respNavigationN

  const [isOpen, setIsOpen] = useState(false);

  const { language, setLanguage } = useContext(AppContext);

  const navigate = useNavigate();

  const translations = Translations();

  const navScroll = useRef();
  const refEn = useRef();
  const refHr = useRef();
  const refEnResp = useRef();
  const refHrResp = useRef();

  useEffect(() => {
    //Adding new navigation when one on the top of page is not visible
    if (showNavigation) {
      navScroll.current.classList.add(`navigationScrollN`);
    }
    //Checking which flag needs to be grayscaled
    //This is inside useEffect because new navigation (which appear while scrolling)
    //will instantly update info which flag to grayscale
    if (
      !refEn.current ||
      !refHr.current ||
      !refEnResp.current ||
      !refHrResp.current
    );
    else if (refEn && refHr && refEnResp && refHrResp && language === `en`) {
      refEn.current.style.filter = `none`;
      refHr.current.style.filter = `grayscale(100%)`;
      refEnResp.current.style.filter = `none`;
      refHrResp.current.style.filter = `grayscale(100%)`;
    } else if (refEn && refHr && refEnResp && refHrResp && language === `hr`) {
      refEn.current.style.filter = `grayscale(100%)`;
      refHr.current.style.filter = `none`;
      refEnResp.current.style.filter = `grayscale(100%)`;
      refHrResp.current.style.filter = `none`;
    }
  }, [showNavigation, language]);

  const handleNav = (newPage) => {
    if (newPage === `Home`) return navigate(routes.home);
    if (newPage === `Fleet`) return navigate(routes.fleet);
    if (newPage === `Locations`) return navigate(routes.locations);
    if (newPage === `AboutUs`) return navigate(routes.aboutUs);
    if (newPage === `FAQ`) return navigate(routes.FAQ);
    if (newPage === `Contact`) return navigate(routes.contact);
  };

  const handleLanguage = (selectedLanguage) => {
    if (selectedLanguage === language) return;
    else setLanguage(selectedLanguage);
  };

  const handleBurger = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const navigationList = (
    <ul className="listN">
      <li onClick={() => handleNav(`Home`)}>{translations.home}</li>
      <li onClick={() => handleNav(`Fleet`)}>{translations.fleet}</li>
      <li onClick={() => handleNav(`Locations`)}>{translations.locations}</li>
      <li onClick={() => handleNav(`AboutUs`)}>{translations.aboutUs}</li>
      <li onClick={() => handleNav(`FAQ`)}>{translations.FAQ}</li>
      <li onClick={() => handleNav(`Contact`)}>{translations.contact}</li>
    </ul>
  );

  return (
    <>
      <div ref={navScroll} className="navigationN">
        {navigationList}
        <div className="flagBoxN">
          <img
            onClick={() => handleLanguage(`en`)}
            src={flag1}
            ref={refEn}
            alt="UkFlag"
            className="flagN"
          ></img>
          <img
            onClick={() => handleLanguage(`hr`)}
            src={flag2}
            ref={refHr}
            alt="CroFlag"
            className="flagN"
          ></img>
        </div>
      </div>
      <div className="respNavigationN">
        <div className="flagBoxN">
          <img
            onClick={() => handleLanguage(`en`)}
            src={flag1}
            ref={refEnResp}
            alt="UkFlag"
            className="flagN"
          ></img>
          <img
            onClick={() => handleLanguage(`hr`)}
            src={flag2}
            ref={refHrResp}
            alt="CroFlag"
            className="flagN"
          ></img>
        </div>
        <div>
          <GiHamburgerMenu onClick={handleBurger} className="burgerN" />
        </div>
      </div>
      {isOpen && <div>{navigationList}</div>}
    </>
  );
}

export default Navigation;
