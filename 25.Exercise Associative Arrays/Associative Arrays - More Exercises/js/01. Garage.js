function garage(input) {
  let garageObj = {};

  for (const commandLine of input) {
    let tokens = commandLine.split(" - ");
    let garageNum = Number(tokens.shift());
    let carsInfo = tokens;

    if (!garageObj.hasOwnProperty(garageNum)) {
      garageObj[garageNum] = [];
    }

    for (const carInfo of carsInfo) {
      let carInfoObj = {};
      for (const carProperties of carInfo.split(", ")) {
        let [key, value] = carProperties.split(": ");
        carInfoObj[key] = value;
      }

      garageObj[garageNum].push(carInfoObj)
    }
    
  }

  print(garageObj);


  function print(garageObj) {
    for (const [garageNumber, garageInfo] of Object.entries(garageObj)) {
      console.log(`Garage № ${garageNumber}`);

      for (const iterator of garageInfo) {
        let entries = Object.entries(iterator)
        let printArr = [];

        for (const [k, v] of entries) {
          let printLine = k + " - " + v;
          printArr.push(printLine);
        }

        console.log(`--- ${printArr.join(", ")}`);
      }
    }
  }

}
garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);