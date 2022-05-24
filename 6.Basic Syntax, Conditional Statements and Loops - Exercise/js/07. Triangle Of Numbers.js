function triangleOfNumbers(num) {

  for (let row = 1; row <= num; row++) {
    let printLine = ``;

    for (let column = 1; column <= row; column++) {
      printLine += `${row} `;

      // if (column !== row) {
      //   printLine += `${row} `;
      // } else {
      //   printLine += `${row}`;
      // }
    }

    console.log(printLine.trim());
  }

}
triangleOfNumbers(5);