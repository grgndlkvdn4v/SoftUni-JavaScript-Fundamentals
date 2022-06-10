function signCheck(numOne, numTwo, numThree) {

  let one;
  if (numOne > 0) {
    one = "Positive";
  } else if (numOne < 0) {
    one = "Negative"
  }

  let two;
  if (numTwo > 0) {
    two = "Positive";
  } else if (numTwo < 0) {
    two = "Negative"
  }

  let three;
  if (numThree > 0) {
    three = "Positive";
  } else if (numThree < 0) {
    three = "Negative"
  }

//====================================

  let oneTwoRes;
  if (one + two === "PositivePositive" || one + two === "NegativeNegative") {
    oneTwoRes = "Positive";
  } else if (one + two === "PositiveNegative" ||
  one + two === "NegativePositive" ) {
    oneTwoRes = "Negative";
  }

  let output;
  if (oneTwoRes + three === "PositivePositive" || oneTwoRes + three === "NegativeNegative") {
    output = "Positive";
  } else if (oneTwoRes + three === "PositiveNegative" ||
    oneTwoRes + three === "NegativePositive" ) {
    output = "Negative";
  }

  console.log(output);

}
// signCheck(5, 12, -15);
signCheck(-6, -12, 14);