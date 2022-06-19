function arrayManipulations(input) {
  
  let strArray = input.shift();
  let splitArray = strArray.split(' ');
  let numsArr = splitArray.map(Number);

  for (let i = 0; i < input.length; i++) {

    let [command, firstNum, secondNum] = input[i].split(' ');
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);


    switch (command) {
      case "Add":
        numsArr.push(firstNum);
        break;

      case "Remove":
        numsArr = numsArr.filter(el => el !== firstNum);
        break;

      case "RemoveAt":
        numsArr.splice(firstNum, 1);
        break;

      case "Insert":
        numsArr.splice(secondNum, 0, firstNum)
        break;
    }
    
  }

  console.log(numsArr.join(" "));

}
arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
// arrayManipulations([
//   "6 12 2 65 6 42",
//   "Add 8",
//   "Remove 12",
//   "RemoveAt 3",
//   "Insert 6 2",
// ]);
