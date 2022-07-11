function piccolo(input) {
  let parkingLotObj = {};

  for (const commandLine of input) {
    let[command, carNum] = commandLine.split(", ");
      parkingLotObj[carNum] = command;
  }

  let entries = Object.entries(parkingLotObj);
  let filteredEntries = entries.filter(el => el[1] === "IN");

  if (filteredEntries.length) {
    
    filteredEntries.sort();

    for (const [carNum, direction] of filteredEntries) {
      console.log(carNum);
    }
  } 
  else {
    console.log("Parking Lot is Empty");
  }


  function slicer(str) { return +str.slice(2,6) }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);

piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);