import { GoCheck, GoX } from "react-icons/go";

function Packages(reservation, setReservation, category, translations) {
  //Packages options shown in Reservation page

  const handleClickPackage = () => {
    if (reservation.addPackage)
      return setReservation({ ...reservation, addPackage: false });
    else return setReservation({ ...reservation, addPackage: true });
  };

  const handleClickDriver = () => {
    if (reservation.addDriver)
      return setReservation({ ...reservation, addDriver: false });
    else return setReservation({ ...reservation, addDriver: true });
  };

  const handleClickBorder = () => {
    if (reservation.crossBorder)
      return setReservation({ ...reservation, crossBorder: false });
    else return setReservation({ ...reservation, crossBorder: true });
  };

  return (
    <>
      <div className="packageBoxR">
        <div className="packageTitleR">{translations.includedPackage}</div>
        <div>
          <GoCheck /> 200km/{translations.day}
        </div>
        <div>
          <GoCheck /> {translations.theftProtection}
        </div>
        <div>
          <GoCheck /> {translations.basicInsurance}
        </div>
      </div>
      <div className="packageBoxR">
        <div className="packageTitleR">{translations.additionalPackage}</div>
        <div>
          {reservation.addPackage ? <GoCheck /> : <GoX />}{" "}
          {translations.unlimited} km/{translations.day}
        </div>
        <div>
          {reservation.addPackage ? <GoCheck /> : <GoX />}{" "}
          {translations.fullInsurance}
        </div>
        <button onClick={handleClickPackage}>
          {translations.include}{" "}
          <span className="additionalPricesR">{(category + 1) * 25}€/day</span>
        </button>
      </div>
      <div>
        <div className="packageBoxR">
          <div>
            {reservation.addDriver ? <GoCheck /> : <GoX />}{" "}
            {translations.addDriver}
          </div>
          <button onClick={handleClickDriver}>
            {translations.include}{" "}
            <span className="additionalPricesR">50€ total</span>
          </button>
        </div>
        <div className="packageBoxR">
          <div>
            {reservation.crossBorder ? <GoCheck /> : <GoX />}{" "}
            {translations.crossBorder}
          </div>
          <button onClick={handleClickBorder}>
            {translations.include}{" "}
            <span className="additionalPricesR">100€ total</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Packages;
