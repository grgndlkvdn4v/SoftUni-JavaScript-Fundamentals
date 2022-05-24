function ages(age) {

  if (age < 0) {
    console.log(`out of bounds`);
  } else if (age <= 2) {
    console.log(`baby`);
  } else if (age <= 13) {
    console.log(`child`);
  } else if (age <=19) {
    console.log(`teenager`);
  } else if (age <= 65) {
    console.log(`adult`);
  } else if (age > 65) {
    console.log(`elder`);
  }


  // let printLine;

  // if (age >= 0 && age <= 2) {
  //   printLine = `baby`;
  // } else if (age >= 3 && age <= 13) {
  //   printLine = `child`;
  // } else if (age >= 14 && age <= 19) {
  //   printLine = `teenager`;
  // } else if (age >= 20 && age <= 65) {
  //   printLine = `adult`;
  // } else if (age >= 66) {
  //   printLine = `elder`;
  // } else {
  //   printLine = `out of bounds`;
  // }
  // console.log(printLine);

}
ages(20);
ages(1);
ages(100);
ages(-9);