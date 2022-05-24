function leapYear(year) {

  const conditionOne = (year % 4 === 0 && year % 100 !== 0);
  const conditionTwo = (year % 400 === 0);

  if ( conditionOne || conditionTwo) {
    console.log(`yes`);
  } else {
    console.log(`no`);
  }

}
// leapYear(1984);
// leapYear(2003);
// leapYear(4);
leapYear(2000);
leapYear(1900);