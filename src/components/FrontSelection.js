import { useContext, useState } from "react";
import { AppContext } from "../context/Context";
import Translations from "../data/translations";
import ReservationLocations from "./ReservationLocations";
import ReservationDates from "./ReservationDates";
import CheckIsCorrect from "../logic/CheckIsCorrect";
import logo from "../img/logo.png";

function FrontSelection() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [warning, setWarning] = useState(``);

  const { setReservation, language } = useContext(AppContext);

  const translations = Translations();

  //Calculating 365 days from today, reservations are not available more than one year in advance
  const yearFromNow = new Date();
  yearFromNow.setDate(yearFromNow.getDate() + 365);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Getting data from form
    const formData = new FormData(e.currentTarget);
    const pickUpLocation = formData.get("pickUpLocation");
    const dropOffLocation = formData.get("dropOffLocation");
    const pickUpTime = formData.get("pickUpTime");
    const dropOffTime = formData.get("dropOffTime");

    // Checking is entered data OK
    const check = CheckIsCorrect(
      pickUpTime,
      dropOffTime,
      pickUpLocation,
      dropOffLocation,
      language,
      translations
    );
    //If data is not OK (for example: there is no pick up location)
    if (check) return setWarning(check);
    //Setting reservation object if everything is OK
    else
      setReservation({
        pickUpLocation,
        dropOffLocation,
        pickUpTime,
        dropOffTime,
        addPackage: false,
        addDriver: false,
        crossBorder: false,
        category: 2,
      });
  };

  return (
    <div className="selectionFr">
      <div className="selectionTitleFr">
        <img src={logo} alt="logo" className="selectionLogoFr" />
        <div>
          <div>Oldtimer</div>
          <div>Rent-a-car</div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="formWarningFr">{warning}</div>
        <div className="formRowFr">
          {ReservationLocations(`pickUpLocation`)}
        </div>
        <div className="formRowFr">
          {ReservationLocations(`dropOffLocation`)}
        </div>
        <div className="formRowFr">
          {ReservationDates(`pickUpTime`, startDate, endDate, setStartDate)}
        </div>
        <div className="formRowFr">
          {ReservationDates(`dropOffTime`, startDate, endDate, setEndDate)}
        </div>
        <div className="selectionBtnBoxFr">
          <button type="submit" className="selectionBtnFr">
            {translations.showCars}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FrontSelection;
