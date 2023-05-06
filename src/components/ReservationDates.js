import { useContext } from "react";
import { AppContext } from "../context/Context";
import Translations from "../data/translations";

//Imports from datepicker library
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import hr from "date-fns/locale/hr";

function ReservationDates(pickUpDropOff, startDate, endDate, setStartEndDate) {
  const { language } = useContext(AppContext);

  const translations = Translations();

  //Calling datepicker in Croatian language
  registerLocale("hr", hr);

  //User can't select date or time in past
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <label>
      {translations.pickupDateAndTime}:
      <div>
        <DatePicker
          onKeyDown={(e) => e.preventDefault()}
          portalId="root-portal"
          name={pickUpDropOff}
          className="datePickerFr"
          popperClassName="popDatePickerFr"
          selected={pickUpDropOff === `pickUpTime` ? startDate : endDate}
          onChange={(date) => setStartEndDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          minTime={setHours(setMinutes(new Date(), 0), 8)}
          maxTime={setHours(setMinutes(new Date(), 30), 19)}
          showTimeSelect
          timeIntervals={30}
          timeFormat="p"
          dateFormat="Pp"
          timeInputLabel="Time:"
          filterTime={filterPassedTime}
          locale={language === `en` ? null : `hr`}
        />
      </div>
    </label>
  );
}

export default ReservationDates;
