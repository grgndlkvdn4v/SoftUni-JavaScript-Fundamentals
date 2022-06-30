function equalNeighbors(inputArr) {

  let array = inputArr.slice();
  let arrayLength = array.length;

  let neighborsCounter = 0;

  for (let currArrIndex = 0; currArrIndex < array.length; currArrIndex++) {
    const currArr = array[currArrIndex];
    const nextArr = array[currArrIndex + 1];
    let currArrLength = currArr.length;

    for (let elIndex = 0; elIndex < currArrLength; elIndex++) {
      const currEl = currArr[elIndex];
      const nextEl = currArr[elIndex + 1];

      if ( currEl === nextEl ) {
        neighborsCounter++;
      }

      if (currArrIndex !== arrayLength - 1) {

        const nextArrEl = nextArr[elIndex];

        if ( currEl === nextArrEl ) {
          neighborsCounter++;
        }
      }

    }
  }

  console.log(neighborsCounter);
}

equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);

equalNeighbors([
    ["test", "yo", "yo", "ho"],
    ["well", "done", "no", "6"],
    ["not", "done", "yet", "5"]
]);
