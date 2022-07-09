function flightSchedule(input) {
  let arrOne = input[0];
  let arrTwo = input[1];
  let arrThree = input[2][0];

  let newArr = [];

  for (let flightInfo of arrOne) {
    flightInfo = flightInfo.split(" ");
    let flight = flightInfo.shift();
    let destination = flightInfo.join(" ");

    let obj = {flight, destination}
    newArr.push(obj)
  }

  for (const iterator of arrTwo) {
    let [cancelledFlight, status] = iterator.split(" ");

    newArr.forEach( (el, i) => {
      if (el.flight === cancelledFlight) {
        el.status = status;
      } 
    });
    
  }

  for (const iterator of newArr) {

    if (!iterator.status) {
      iterator.status = "Ready to fly"
    }

    if (arrThree === "Cancelled") {
      if (iterator.status === arrThree) {
        console.log(`{ Destination: '${iterator.destination}', Status: '${iterator.status}' }`);
      }
    }

    else if (arrThree === "Ready to fly") {
      if (iterator.status === "Ready to fly") {
        console.log(`{ Destination: '${iterator.destination}', Status: '${iterator.status}' }`);
      }
    }

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
  ["Ready to fly"],
]);