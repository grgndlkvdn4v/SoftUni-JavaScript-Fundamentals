function travelTime(input) {
  let travelObj = {};

  for (const iterator of input) {
    let [country, town, price] = iterator.split(" > ");
    price = Number(price);

    let obj = {};
    obj[town] = price;

    if ( !travelObj.hasOwnProperty(country) ) {
      travelObj[country] = obj;
    } else {

      if ( travelObj[country].hasOwnProperty(town) ) {
      // Ако има такъв град в обекта
        if (travelObj[country][town] > price) {
          travelObj[country][town] = price
        }
      } 
      else  { // Ако няма такъв град в обекта
        travelObj[country][town] = price;
      }

    }

  }


  let contryEntries = Object.entries(travelObj);
  let sortedContryEntries = contryEntries.sort(
    ( [countryA, townObjA], [countryB, townObjB] ) =>
    countryA.localeCompare(countryB)
  );

  for (const [country, townObj] of sortedContryEntries) {
    let printLine = country + " -> "
    
    let townEntries = Object.entries(townObj);
    let sortedTownEntries = townEntries.sort(
    ( [townA, priceA], [townB, priceB] ) => priceA - priceB );

    for (const [town, price] of sortedTownEntries) {
      printLine += `${town} -> ${price} `
    }

    console.log(printLine);
  }


  // console.table(travelObj);
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 600",
  "Bulgaria > Sofia > 200",
]);