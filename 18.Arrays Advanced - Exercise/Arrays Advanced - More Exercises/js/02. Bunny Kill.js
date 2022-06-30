function bunnyKill(input) {

  let array = input.slice();
  let coordinatesArr = array.pop().split(" ");

  let snowBallDamage = 0;
  let bunnysKilled = 0;

  // console.log(array);

  while(coordinatesArr.length > 0) {

    let coordinates = coordinatesArr.shift();
    let row = parseFloat(coordinates);
    let column = Number( coordinates.slice(coordinates.indexOf(",") + 1) );

    console.log(`row = ${row} | column = ${column}`);
    
    // console.log(array);
    explosions(row, column);
    // console.log(array);

  }
    snowballsDamage();



  function explosions(row, column) {

    if (row === 0) {
      currentRowExplosion();
      lowerRowExplosion();
    } else if (row === array.length - 1) {
      currentRowExplosion();
      upperRowExplosion();
    } else {
      lowerRowExplosion();
      currentRowExplosion();
      upperRowExplosion();
    }

    function currentRowExplosion() {
      // console.log("currentRow");
      
      let rowArr = array[row].split(" ").map(Number);

      // the death of the bunny with the bomb
      let explosionDamage = rowArr[column];
      snowBallDamage += rowArr[column];
      rowArr[column] = 0;
      bunnysKilled++;

      if (column === 0 ) {  // bunny on the left
        rowArr[column + 1] = 0;
      } else if (column === rowArr.length - 1) {  // bunny on th right
        rowArr[column - 1] = 0;
      } else {  // bunnys on both sides;
        rowArr[column + 1] = 0;
        rowArr[column - 1] = 0;
      }

      array[row] = rowArr.slice().join(" ");
      // console.log(array[row]);
    }

    function upperRowExplosion() {
      // console.log("upperRow");

      let upperRow = array[row - 1].split(" ").map(Number);

      if (column === 0 ) {  // bunny on the left + middle
        upperRow[column] = 0;
        upperRow[column + 1] = 0;
      } else if (column === upperRow.length - 1) {  // bunny on th right + middle
        upperRow[column] = 0;
        upperRow[column - 1] = 0;
      } else {  // bunnys on both sides + middle;
        upperRow[column] = 0;
        upperRow[column + 1] = 0;
        upperRow[column - 1] = 0;
      }

      array[row - 1] = upperRow.slice().join(" ");
      // console.log(array[row - 1]);
      }  

    function lowerRowExplosion() {
    // console.log("lowerRow");
      
      let lowerRow = array[row + 1].split(" ").map(Number);

      if (column === 0 ) {  // bunny on the left + middle
        lowerRow[column] = 0;
        lowerRow[column + 1] = 0;
      } else if (column === lowerRow.length - 1) {  // bunny on th right + middle
        lowerRow[column] = 0;
        lowerRow[column - 1] = 0;
      } else {  // bunnys on both sides + middle;
        lowerRow[column] = 0;
        lowerRow[column + 1] = 0;
        lowerRow[column - 1] = 0;
      }

      array[row + 1] = lowerRow.slice().join(" ");
      // console.log(array[row + 1]);
    } 

  }

  function snowballsDamage() {

    for (let currRowIndex = 0; currRowIndex < array.length; currRowIndex++) {

      let currCol = array[currRowIndex].split(" ").map(Number);

      let sum = 0;
      currCol.filter(x => x !== 0);
      currCol.map(x => sum += x, bunnysKilled++);

      snowBallDamage += sum
      console.log(sum);
      
    }

    console.log(array);
    console.log(`Bunnys Killed = ${bunnysKilled}`);
    console.log(`snowballDemage = ${snowBallDamage}`);
    
  }

}

bunnyKill([
  "5 10 15 20",
  "10 10 10 10",
  "10 15 10 10",
  "10 10 10 10",
  "2,2 0,1",
]);