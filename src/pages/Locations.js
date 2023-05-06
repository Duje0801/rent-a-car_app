import Navigation from "../components/Navigation";
import Chat from "../components/Chat";
import LocationsData from "../data/locationsData";
import Translations from "../data/translations";
import frontImg from "../img/frontImg.jpg";
import "../style/pages/locations.css";

function Locations() {
  const locationsList = LocationsData();
  const translation = Translations();

  const mappedLocations = locationsList.map((location, i) => {
    return (
      <div key={i}>
        <div className="locationsTitleL">{location.city}</div>
        <div className="locationsAdressL">{location.adress}</div>
        <div className="mapL">{location.link}</div>
      </div>
    );
  });

  return (
    <div>
      <div className="frontL">
        <Navigation />
        <img src={frontImg} alt="frontImage" className="frontImageL" />
        <div className="locationsL">
          <div>{translation.locations}</div>
          <div className="locationsListL">{mappedLocations}</div>
        </div>
      </div>
      <Chat />
    </div>
  );
}

export default Locations;
