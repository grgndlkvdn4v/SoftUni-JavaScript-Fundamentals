function requiredReading(pages, pagesPerHour, days) {
  
  let bookTime = pages / pagesPerHour;
  let hoursPerDay = bookTime / days;
  console.log(hoursPerDay);

}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);