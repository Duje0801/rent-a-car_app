import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AppContext } from "../context/Context";
import MovingLRcarList from "../logic/MovingLRcarList";
import Translations from "../data/translations";
import carData from "../data/carData";
import routes from "../routes/Routes";
import "../style/components/fleetComponent.css";

function Fleet() {
  //There are two possible mappings, one is if screen is 621px and wider (showing all 4 car categories),
  //Another one is if screen is narrower than 620px (have `resp` in className and user can see only one class category),
  //but can change to another category after clicking on arrows

  const { carFleetShow, setFleetShow } = useContext(AppContext);

  const navigate = useNavigate();

  const translations = Translations();
  const carDataArray = carData();

  //Selected to see info about category (bigger screens)
  const handleNav = (number) => {
    navigate(routes.fleet);
    setFleetShow(number);
  };

  //Changing category to see (smaller screens)
  const handleArrowClick = (side) => {
    MovingLRcarList(side, carFleetShow, setFleetShow);
  };

  //Mapping if screen width is 621px or wider
  const carInfoMapped = carDataArray.map((car, i) => {
    return (
      <div className="carDisplayFC" key={i}>
        <div>{car.category}</div>
        <div className="carImgBoxFC">
          <img src={car.img} alt="carImg" className="carImgFC" />
        </div>
        <div onClick={() => handleNav(i)} className="seeMoreFC">
          {translations.seeMore}
        </div>
      </div>
    );
  });

  //Mapping if screen width is narrower than 620px
  const responsiveCarInfoMapped = carDataArray.map((car, i) => {
    if (i !== carFleetShow) return;
    else
      return (
        <div className="respCarDisplayFC" key={i}>
          <div>{car.category}</div>
          <div className="respCarImgBoxFC">
            <IoIosArrowBack
              onClick={() => handleArrowClick(`L`)}
              className="arrowFC"
            />
            <img src={car.img} alt="carImg" className="respCarImgFC" />
            <IoIosArrowForward
              onClick={() => handleArrowClick(`R`)}
              className="arrowFC"
            />
          </div>
          <div onClick={() => handleNav(i)} className="seeMoreFC">
            {translations.seeMore}
          </div>
        </div>
      );
  });

  return (
    <div className="fleetFC">
      <div className="titleFC">{translations.ourFleet}</div>
      <div className="carSelectionFC">
        {carInfoMapped}

        <div className="respCarSelectionFC">
          <div className="arrowBoxFC">
            <IoIosArrowBack
              onClick={() => handleArrowClick(`L`)}
              className="arrowFC"
            />
          </div>
          {responsiveCarInfoMapped}
          <div className="arrowBoxFC">
            <IoIosArrowForward
              onClick={() => handleArrowClick(`R`)}
              className="arrowFC"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fleet;
