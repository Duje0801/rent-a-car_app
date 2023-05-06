import ReactDOM from "react-dom";
import Translations from "../data/translations";
import "../style/pages/reservation.css";

function ConfirmationModal({ valuesForModal }) {
  const { reservation, fullPrice, setOpenModal, setOpenFinalModal } =
    valuesForModal;

  const translations = Translations();

  const handleClickYes = () => {
    setOpenModal(false);
    setOpenFinalModal(true);
  };

  const handleClickNo = () => {
    setOpenModal(false);
  };

  return ReactDOM.createPortal(
    <div>
      <div className="modalBackgroundR">
        <div className="modalR">
          <div>{translations.checkReservation}</div>
          <div>
            <span className="descriptionR">{translations.pickUpLocation}:</span>{" "}
            {reservation.pickUpLocation}
          </div>
          <div>
            <span className="descriptionR">
              {translations.pickupDateAndTime}:
            </span>{" "}
            {reservation.pickUpTime}
          </div>
          <div>
            <span className="descriptionR">
              {translations.dropOffLocation}:
            </span>{" "}
            {reservation.dropOffLocation}
          </div>
          <div>
            <span className="descriptionR">
              {translations.dropofDateAndTime}:
            </span>{" "}
            {reservation.dropOffTime}
          </div>
          <div>
            <span className="descriptionR">{translations.class}:</span>{" "}
            {reservation.category}
          </div>
          <div>
            <span className="descriptionR">
              {translations.additionalPackage}:
            </span>{" "}
            {reservation.addPackage ? translations.yes : translations.no}
          </div>
          <div>
            <span className="descriptionR">{translations.addDriver}:</span>{" "}
            {reservation.addDriver ? translations.yes : translations.no}
          </div>
          <div>
            <span className="descriptionR">{translations.crossBorder}:</span>{" "}
            {reservation.crossBorder ? translations.yes : translations.no}
          </div>
          <div>
            <span className="descriptionR">{translations.fullPrice}:</span>{" "}
            <span className="fullPriceR">{fullPrice}€</span>
          </div>
          <div>
            <button onClick={handleClickYes} className="modalButtonYesR">
              {translations.yesConfirm}
            </button>
            <button onClick={handleClickNo} className="modalButtonNoR">
              {translations.no}
            </button>
          </div>
        </div>
      </div>
      ,
    </div>,
    document.querySelector(`.modal-container`)
  );
}

export default ConfirmationModal;
