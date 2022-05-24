function nextDay(year, month, day) {

  day += 1;

  if (day > 30) {
    day = 1;
    month++;
    if (month > 12) {
      month = 1;
      year++;
    }
  }

  let newDate = `${year}-${month}-${day}`;
  console.log(newDate);

}
// nextDay(2020, 3, 24);
// nextDay(2016, 9, 30);
// nextDay(2016, 12, 30);
nextDay(1, 1, 1);