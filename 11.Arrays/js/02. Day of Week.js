function dayOfWeek(day) {

  if (day < 1 || day > 7) {
    console.log("Invalid day!");
  } else {
    let daysArr = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday" ]

    console.log(daysArr[day - 1]);
  }

}
dayOfWeek(2);
dayOfWeek(8);
dayOfWeek(-3);