function arrayManipulator(inputArr, commandsArr) {

  let array = inputArr.slice();

  let currCommandIndex = 0;
  let command = commandsArr[currCommandIndex]
  while ( command !== "print" ) {

    command = command.split(" ");
    [action] = command;

    switch (action) {

      case "add": add(command); break;
      case "addMany": addMany(); break;
      case "contains": contains(); break;
      case "remove": remove(); break;
      case "shift": shift(); break;
      case "sumPairs": sumPairs(); break;

    }

    command = commandsArr[++currCommandIndex];
  }

  console.log(`[ ${array.join(", ")} ]`);

{ // Functions scope

  function add() {

    [action, index, element] = command;
    index = Number(index)

    return array.splice(index, 0, element);
  }

  function addMany() {

    command.shift();
    let index = command.shift();
    command.reverse();

    for (let currAddNum of command) {
      currAddNum = Number(currAddNum);
      array.splice(index, 0, currAddNum)
    }
  }

  function contains() {

    [action, element] = command;
    element = Number(element);

    if (array.includes(element)) {
      return console.log(array.indexOf(element));
    } else {
      return console.log(-1);
    }
  }

  function remove() {
    
    [action, index] = command;
    index = Number(index);

    return array.splice(index, 1);
  }

  function shift() {

    [action, positions] = command;
    positions = Number(positions);

    for (let rotations = 1; rotations <= positions; rotations++) {
      array.push(array[0]);
      array.shift()
    }
  }

  function sumPairs() {
    let sumArr = []

    for (let index = 0; index < array.length; index++) {
      let firstNum = Number( array[index++] );
      let secondNum = Number( array[index] );
      let pair = firstNum + secondNum;

      if (Number.isNaN(pair)) {
        pair = firstNum;
      }
      sumArr.push(pair)
    }

    array = sumArr.slice();
  }

}

}

arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);

// arrayManipulator(
//   [1, 2, 3, 4, 5],
//   ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
// );