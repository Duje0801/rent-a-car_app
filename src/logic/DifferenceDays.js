function DifferenceDays(language, pickUpTime, dropOffTime) {
  let startDate,
    endDate = ``;

  //Because of AM/PM format it goes from different calculation than 24h format
  if (language === `en`) {
    startDate = new Date(pickUpTime).getTime();
    endDate = new Date(dropOffTime).getTime();
  } else {
    //Format must be converted from 24h format to AM/PM format to calculate how many days is car rented
    const splittedStartDate = pickUpTime.split(` `);
    const splittedEndDate = dropOffTime.split(` `);

    let startDateArray = [];
    let endDateArray = [];

    for (let el of splittedStartDate) {
      el.includes(".")
        ? startDateArray.push(el.slice(0, el.length - 1))
        : startDateArray.push(el);
    }

    for (let el of splittedEndDate) {
      el.includes(".")
        ? endDateArray.push(el.slice(0, el.length - 1))
        : endDateArray.push(el);
    }

    let [dayS, monthS, yearS, timeS] = startDateArray;
    let [hourS, minuteS] = timeS.split(":");
    let amPMS = "";

    let [dayE, monthE, yearE, timeE] = endDateArray;
    let [hourE, minuteE] = timeE.split(":");
    let amPME = "";

    if (Number(hourS) < 12) amPMS = "AM";
    else if (Number(hourS) > 11) {
      amPMS = "PM";
      hourS -= 12;
    }

    if (Number(hourE) < 12) amPME = "AM";
    else if (Number(hourE) > 11) {
      amPME = "PM";
      hourE -= 12;
    }

    const finalStartDate = `${monthS}/${dayS}/${yearS}, ${hourS}:${minuteS} ${amPMS}`;
    const finalEndDate = `${monthE}/${dayE}/${yearE}, ${hourE}:${minuteE} ${amPME}`;

    startDate = new Date(finalStartDate);
    endDate = new Date(finalEndDate);
  }

  //Getting number of days rented
  return Math.ceil((endDate - startDate) / (1000 * 3600 * 24));
}

export default DifferenceDays;
