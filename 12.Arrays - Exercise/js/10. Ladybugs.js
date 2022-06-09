function ladyBugs(inputArray) {

  let field = inputArray[0];
  let initialIndexes = inputArray[1].replace(/ /g, "");

  let resArr = [];

  // Създаване на нов масив с празни места за калинките
  for (let fieldPosition = 1, index = fieldPosition - 1; fieldPosition <= field; fieldPosition++, index++) {
    resArr.push(0)
  }


  // обхождане на входа за да се определи кое поле трябва да е запълнено в начално състояние
  for (let index = 0; index < initialIndexes.length; index++) {
    const currInitialIndex = initialIndexes[index];
      resArr[currInitialIndex] = 1
    }

    // The given indexes may or may not be inside the field range
    if (resArr.length > field) {
      resArr.length = field;
    }

    // цикъл за въртене на вхоните данни и изпълнение на условието
  for (let currCondition = 2; currCondition < inputArray.length; currCondition++) {

    let command = inputArray[currCondition];
    let startIndex = parseFloat(command);

    // If you are given a ladybug index that does not have a ladybug there, nothing happens. If you are given a ladybug index that is outside the field, nothing happens. 
    if (resArr[startIndex] == 0 ||
        startIndex >= field ||
        startIndex < 0) {
      continue;
    }

    // дефиниране на transitions
    let transitions = "";
    let transitionFlag = false;
    let spaceCounter = 0
    for (let index = 0; index < command.length; index++) {
      let symbol = command[index];
      if (symbol === " ") {
        spaceCounter++;
        if (spaceCounter == 2) {
          transitionFlag = true;
        }
      }
      if (transitionFlag)
        transitions += symbol;
    }
    transitions = parseFloat(transitions)
  //==========================================


    if (command.includes("right")) {
      resArr[startIndex] = 0

      do {
        startIndex += transitions; 
      } while (resArr[startIndex] === 1);

      resArr[startIndex] = 1
      
      if (resArr.length > field) {
        resArr.length = field;
      }


    } else if (command.includes("left")) {
      resArr[startIndex] = 0

      do {
        startIndex -= transitions; 
      } while (resArr[startIndex] === 1);

      resArr[startIndex] = 1
      
      if (resArr.length > field) {
        resArr.length = field;
      }

    }

  }

  console.log(resArr.join(" "));

}
ladyBugs([5, "3", "3 left 2", "1 left -2", "1 right 1"]);
// ladyBugs([3, "0 1", "0 right 1", "2 right 1"]);
// console.log("=====");
// ladyBugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);