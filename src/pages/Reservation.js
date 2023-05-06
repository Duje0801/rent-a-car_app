import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { AppContext } from "../context/Context";
import ConfirmationModal from "../components/ConfirmationModal";
import FinalModal from "../components/FinalModal";
import Packages from "../components/Packages";
import carData from "../data/carData";
import Translations from "../data/translations";
import DifferenceDays from "../logic/DifferenceDays";
import routes from "../routes/Routes";
import logo from "../img/logo.png";
import "../style/pages/reservation.css";

function Reservation() {
  const [openModal, setOpenModal] = useState(false);
  const [openFinalModal, setOpenFinalModal] = useState(false);
  const [fullPrice, setFullPrice] = useState(``);
  const [diffLocation, setDiffLocation] = useState(``);

  const { reservation, setReservation, carFleetShow, setFleetShow, language } =
    useContext(AppContext);

  const navigate = useNavigate();

  const carList = carData();
  const translations = Translations();

  //Get code for packages
  const packages = Packages(
    reservation,
    setReservation,
    carFleetShow,
    translations
  );

  //Get how many days selected car wll be rented
  const differenceDays = DifferenceDays(
    language,
    reservation.pickUpTime,
    reservation.dropOffTime
  );

  //Automatically scroll to top of the reservation page at page opening
  //And set Higher class as default
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    setReservation({ ...reservation, category: carList[2].category });
  }, []);

  //Add packages to full price every time one of the packages is selected
  useEffect(() => {
    let fullPriceCalc =
      (carList[carFleetShow].price +
        (reservation.addPackage ? (carFleetShow + 1) * 25 : 0)) *
      differenceDays;
    if (reservation.addDriver) fullPriceCalc += 50;
    if (reservation.crossBorder) fullPriceCalc += 100;
    if (reservation.pickUpLocation !== reservation.dropOffLocation) {
      fullPriceCalc = (fullPriceCalc * 1.25).toFixed(2);
      setDiffLocation(`* ${translations.higherPrice}`);
    }
    setFullPrice(fullPriceCalc);
  }, [carFleetShow, reservation]);

  //Changes if modal is open or not
  useEffect(() => {
    if (openModal || openFinalModal) {
      //Scroll to the top of the page when modals are open
      document.body.classList.add(`overflow-hidden`);
    } else document.body.classList.remove(`overflow-hidden`);
  }, [openModal, openFinalModal]);

  const handleSelectClass = (number) => {
    setReservation({ ...reservation, category: carList[number].category });
    setFleetShow(number);
  };

  const handleBackClick = () => {
    setReservation(null);
    navigate(routes.home);
  };

  const handleConfirm = () => {
    setOpenModal(true);
  };

  const mappingCategories = carList.map((car, i) => {
    //Check is class selected, if true, give border to selected class
    const catShowClass =
      carFleetShow === i
        ? "categoryShowR categoryShowBorderR"
        : "categoryShowR";
    return (
      <div
        onClick={() => handleSelectClass(i)}
        className={catShowClass}
        key={i}
      >
        <div>{car.category}</div>
        <div className="categoryShowBoxImg">
          <img src={car.img} alt="car" className="categoryShowImg" />
        </div>
        <div>
          {translations.brand}: {car.make}
        </div>
        <div>Model: {car.model}</div>
        <div>
          {translations.power}: {car.power} hp
        </div>
        <div>
          {translations.engine}: {car.engine}
        </div>
        <div>
          {translations.year}: {car.year}.
        </div>
      </div>
    );
  });

  //Props for modal to share
  const valuesForModal = {
    reservation,
    fullPrice,
    setOpenModal,
    setOpenFinalModal,
  };

  return (
    <div className="reservationR">
      <div className="titleR">
        <div onClick={handleBackClick} className="backTitleR">
          <FaArrowLeft /> {translations.back}
        </div>
        <div className="titleLogoTextR">
          <img src={logo} className="logoR" alt="logo" />
          Oldtimer Rent-a-car
        </div>
      </div>

      <div className="gridR">
        {mappingCategories}
        {packages}
        <div className="priceConfirmR">
          <div className="fullPriceTextR">
            {translations.fullPrice}:{" "}
            <span className="fullPriceNumR">{fullPrice}€</span>
          </div>
          <button onClick={handleConfirm} className="confirmR">
            Confirm
          </button>
          <div className="diffLocationR">{diffLocation}</div>
        </div>
      </div>

      {openModal && <ConfirmationModal valuesForModal={valuesForModal} />}
      {openFinalModal && <FinalModal setOpenFinalModal={setOpenFinalModal} />}
    </div>
  );
}

export default Reservation;
