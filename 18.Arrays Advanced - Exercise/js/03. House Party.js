function houseParty(inputArr) {
  
  let resultArr = [];

  for (let element of inputArr) {
    let elArr = element.split(" ");
    let name = elArr[0];

    let notGoing = elArr.includes("not"); //false

    if (notGoing) {

      if (resultArr.includes(name)) {
        let nameIndex = resultArr.indexOf(name);
        resultArr.splice(nameIndex, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
      
    } else {

      if (resultArr.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        resultArr.push(name);
      }
    }

  }

  console.log(resultArr.join("\n"));

}
// houseParty([
//   "Allie is going!",
//   "George is going!",
//   "John is not going!",
//   "George is not going!",
// ]);
houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);