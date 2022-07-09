function piccolo(input) {

  let parkingLotArr = [];

  for (const commandLine of input) {
    let[command, carNum] = commandLine.split(", ");

    switch (command) {

      case "IN":
        parkingLotArr.push(carNum)
      break;

      case "OUT":
        if (parkingLotArr. includes(carNum)) {
          let index = parkingLotArr.indexOf(carNum);
          parkingLotArr.splice(index, 1);
        }
      break;

    }

  }


  if (parkingLotArr.length !== 0) {  
    parkingLotArr.sort( (a, b) => 
      slicer(a) - slicer(b)
    );

    for (const iterator of parkingLotArr) {
      console.log(iterator);
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