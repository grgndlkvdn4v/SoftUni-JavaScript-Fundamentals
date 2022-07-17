function garage(input) {
  let garage = {};

  for (let iterator of input) {
    iterator = iterator.split(" - ");
    let garageNumber = iterator.shift();

    for (const carInfoIterator of iterator) {
      let carInfo = carInfoIterator.split(", ")

      for (const info of carInfo) {
        let[key, value] = info.split(": ");

        console.log(garageNumber + " | " + key + " | " + value);
        let obj = {};
        obj[key] = value;
        garage[garageNumber]= obj;
      }
    }
  }
    console.table(garage);
}
garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);