function garage(input) {
  let garage = new Map();

  for (let iterator of input) {
    iterator = iterator.split(" - ");
    let garageNumber = iterator.shift();
    console.log(`Garage № ${garageNumber}`);

    // let carInfoMap = new Map();
    let printLine = `--- `;

    iterator = iterator[0].split(", ");
    for (const carInfo of iterator) {
      let [property, value] = carInfo.split(": ");
      printLine += `${property} - ${value}, `

      // if (!carInfoMap.has(property)) { // Ако има такова property
      //   carInfoMap.set(property, value)
      // }
      // else { // Ако няма
      //   garageNumber.get(carInfoMap.set(property, value))
      // }
    }
    console.log(printLine);
    // console.table(carInfoMap);
    // garage.set(garageNumber, carInfoMap)

  }
  
  // console.table(garage);

  // for (const [garageNum, garageInfo] of Array.from(garage)) {
  //   console.log(`Garage № ${garageNum}`);
  //   for (const [property, value] of garageInfo) {
  //     console.log(property + " - " + value);
      
  //   }
    
  // }

}
garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);