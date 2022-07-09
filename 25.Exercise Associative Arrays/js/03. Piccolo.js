function piccolo(input) {
  let parkingLot = new Set();

  for (const commandLine of input) {
    let[command, carNum] = commandLine.split(", ");

    switch (command) {
      case "IN":
        parkingLot.add(carNum);
      break;
    
      case "OUT":
        parkingLot.delete(carNum);
      break;
    }
  }

  if (parkingLot.size) {
    let sortedParkingLot = (Array.from(parkingLot)).sort();
    // let sortedParkingLot = (Array.from(parkingLot)).sort((a, b) =>
    //   slicer(a) - slicer(b)
    // );
    console.log(sortedParkingLot.join("\n"));
  } else {
    console.log("Parking Lot is Empty");
  }


  function slicer(str) { return +str.slice(2,6) }

  function carNumSplitter(carNum) {
    let obj = {
      firstTwo: carNum.slice(0, 2),
      num: Number(carNum.slice(2, 6)),
      secondTwo: carNum.slice(6)
    }
    return obj
  }

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
  "IN, CA2822UU"
]);