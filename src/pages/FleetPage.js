import { useContext } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AppContext } from "../context/Context";
import Navigation from "../components/Navigation";
import Chat from "../components/Chat";
import carData from "../data/carData";
import Translations from "../data/translations";
import MovingLRcarList from "../logic/MovingLRcarList";
import frontImg from "../img/frontImg.jpg";
import "../style/pages/fleetPage.css";

function FleetPage() {
  const { carFleetShow, setFleetShow } = useContext(AppContext);

  const carList = carData();
  const translations = Translations();

  const handleArrowClick = (side) => {
    MovingLRcarList(side, carFleetShow, setFleetShow);
  };

  const mappedCarList = carList.map((car, i) => {
    if (i === carFleetShow)
      return (
        <div className="showFleetFP" key={i}>
          <div className="selectionFleetFP">
            <FaArrowLeft
              className="arrowFleetFP"
              onClick={() => handleArrowClick(`L`)}
            />
            <div className="carCategoryFleetFP">{car.category}</div>
            <FaArrowRight
              className="arrowFleetFP"
              onClick={() => handleArrowClick(`R`)}
            />
          </div>
          <div className="carInfoFleetFP">
            <div className="imgBoxFleetFP">
              <img src={car.img} alt={car.category} className="imgFleetFP" />
            </div>
            <div className="infoBoxFleetFP">
              <div>
                {translations.from}{" "}
                <span className="priceFleetFP">{car.price} €</span> /{" "}
                {translations.day}
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
          </div>
        </div>
      );
  });

  return (
    <div>
      <div className="frontFP">
        <Navigation />
        <img src={frontImg} alt="frontImage" className="frontImageFP" />
        <div className="fleetFP">
          <div>{translations.fleet}</div>
          {mappedCarList}
        </div>
      </div>
      <Chat />
    </div>
  );
}

export default FleetPage;
