function rounding(value, precision) {

  if (precision > 15) {
    precision = 15;
  }

  value = value.toFixed(precision);
  // console.log(Number(value));
  console.log(parseFloat(value));

}

rounding(3.1415926535897932384626433832795, 2);
rounding(3.1415926535897932384626433832795, 18);
rounding(10.5, 3);