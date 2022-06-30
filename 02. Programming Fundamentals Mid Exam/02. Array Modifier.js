function arrayModifier(input) {
  
  let array = input
    .shift()
    .split(" ")
    .map(Number);

    let nextLine = input.shift();;
    while (nextLine !== "end") {

      let[command, indexOne, indexTwo] = nextLine.split(" ");
      indexOne = Number(indexOne);
      indexTwo = Number(indexTwo);

      let numOne;
      let numTwo;

      switch (command) {

        case "swap":
          numOne = array.slice(indexOne, indexOne + 1)[0];
          numTwo = array.slice(indexTwo, indexTwo + 1)[0];
          // console.log(`${command} ${indexOne}(${numOne}) and ${indexTwo}(${numTwo})`);
          array.splice(indexOne, 1, numTwo);
          array.splice(indexTwo, 1, numOne);
          break;

        case "multiply":
          numOne = array.slice(indexOne, indexOne + 1)[0];
          numTwo = array.slice(indexTwo, indexTwo + 1)[0];
          array.splice(indexOne, 1, numOne * numTwo);
          // console.log(`${command} ${indexOne}(${numOne}) and ${indexTwo}(${numTwo}) = ${numOne * numTwo}`);
          break;

        case "decrease":
          array = array.map(el => el - 1)
          break;

      }


      nextLine = input.shift();
    }

  console.log(array.join(", "));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end"
]);

arrayModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);

// arrayModifier([
//   "23 -2 321 87 42 90 -123",
//   "swap 1 3",
//   "swap 3 6",
//   "swap 1 0",
//   "multiply 1 2",
//   "multiply 2 1",
//   "decrease",
//   "end",
// ]);