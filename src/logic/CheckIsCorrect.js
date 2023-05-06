function CheckIsCorrect(
  pickUpTime,
  dropOffTime,
  pickUpLocation,
  dropOffLocation,
  language,
  translations
) {
  // Checking are pick-up and drop-off location selected
  if (!pickUpLocation) return translations.pickUpError;
  if (!dropOffLocation) return translations.dropOffError;

  //Checking is selected drop-off time after pick-up time
  if (new Date(pickUpTime) >= new Date(dropOffTime))
    return translations.timelineError;

  //Checking is company working at selected time, if language is English (AM/PM)
  if (language === `en`) {
    const splittedPickUpTime = pickUpTime.split(` `);
    const splittedDropOffTime = dropOffTime.split(` `);

    const timeP = splittedPickUpTime[1];
    const AmPmP = splittedPickUpTime[2];
    const hourP = timeP.split(`:`)[0];

    const timeD = splittedDropOffTime[1];
    const AmPmD = splittedDropOffTime[2];
    const hourD = timeD.split(`:`)[0];

    if (AmPmP === `AM` && Number(hourP) < 8)
      return `Pick-up is not available before 08:00 AM`;
    if (AmPmP === `AM` && Number(hourP) < 8)
      return `Drop-off is not available before 08:00 AM`;
    if (AmPmP === `PM` && Number(hourP) > 7 && Number(hourP) !== 12)
      return `Pick-up is not available after 19:30 PM`;
    if (AmPmD === `PM` && Number(hourD) > 7 && Number(hourD) !== 12)
      return `Drop-off is not available after 19:30 PM`;
  }

  //Checking is company working at selected time, if language is Croatian (24h)
  else if (language === `hr`) {
    const splittedPickUpTime = pickUpTime.split(` `);
    const splittedDropOffTime = dropOffTime.split(` `);

    const timeP = splittedPickUpTime[3];
    const [hourP] = timeP.split(`:`);

    const timeD = splittedDropOffTime[3];
    const [hourD] = timeD.split(`:`);

    if (Number(hourP) < 8 || Number(hourD) < 8)
      return `Preuzimanje ili vraćanje automobila nisu dozvoljeni prije 8:00h`;
    if (Number(hourP) > 19 || Number(hourD) > 19)
      return `Preuzimanje ili vraćanje automobila nisu dozvoljeni nakon 19:30h`;
  }

  //If everything is OK
  else return false;
}
export default CheckIsCorrect;
