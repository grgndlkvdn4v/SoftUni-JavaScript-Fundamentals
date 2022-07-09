function flightSchedule(input) {
  let arrOne = input[0];
  let arrTwo = input[1];
  let arrThree = input[2];

  let newArr = [];
  let readyToFly = [];

  for (const cancelCommand of arrTwo) {
    let[changeFlight, status] = cancelCommand.split(" ");
    
    for (let iterator of arrOne) {
      iterator = iterator.split(" ");
      let flight = iterator.splice(0,1).join();
      let destination = iterator.join(" ");

      let obj = {flight, destination}

      if (flight === changeFlight) {
        obj.status = status;
      }
      newArr.push(obj);
    }

    // console.log("===============================");
    // break;
  }
    
  for (const iterator of newArr) {
    console.log(iterator);
  }

}
flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);