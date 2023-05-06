import LocationsData from "../data/locationsData";
import Translations from "../data/translations";

function ReservationLocations(pickUpDropOf) {
  const cities = LocationsData();
  const translations = Translations();

  const mappingCities = cities.map((el, i) => {
    return (
      <option value={el.city} key={i}>
        {el.city}
      </option>
    );
  });

  return (
    <div className="locationsFr">
      <div>
        <label>
          {pickUpDropOf === `pickUpLocation`
            ? translations.pickUpLocation
            : translations.dropOffLocation}
          :{" "}
        </label>
      </div>
      <div>
        <select className="pickUpDropOffLocationFr" name={pickUpDropOf}>
          <option value="">-----</option>
          {mappingCities}
        </select>
      </div>
    </div>
  );
}

export default ReservationLocations;
