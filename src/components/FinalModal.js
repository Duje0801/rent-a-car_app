import { useContext } from "react";
import ReactDOM from "react-dom";
import { AppContext } from "../context/Context";
import Translations from "../data/translations";
import logo from "../img/logo.png";
import "../style/pages/reservation.css";

function FinalModal({ setOpenFinalModal }) {
  const { setReservation } = useContext(AppContext);

  const translations = Translations();

  const handleClick = () => {
    setOpenFinalModal(false);
    setReservation(null);
    //Remove overflow hidden when user goes to home page
    document.body.classList.remove(`overflow-hidden`);
  };

  return ReactDOM.createPortal(
    <div>
      <div className="modalBackgroundR">
        <div className="modalR">
          <img src={logo} alt="logo"></img>
          <div className="finalModalTitleR">{translations.thanks}</div>
          <div>
            <button onClick={handleClick} className="modalButtonYesR">
              {translations.goBack}
            </button>
          </div>
        </div>
      </div>
      ,
    </div>,
    document.querySelector(`.modal-container`)
  );
}

export default FinalModal;
