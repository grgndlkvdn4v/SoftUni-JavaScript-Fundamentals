function travelTime(input) {
  let travel = new Map();

  for (const iterator of input) {
    let [country, town, cost] = iterator.split(" > ");
    cost = Number(cost);

    let townsMap = new Map();

    if (!travel.has(country)) { // има ли такава държава
      townsMap.set(town, cost)
      travel.set(country, townsMap)
    }
    
    else {
      if ( travel.get(country).has(town) ) {        // има ли такъв град
        
        if (cost < travel.get(country).get(town)) { // по-ниска ли е цената
          console.log("LOWER COST!!");
          travel.get(country, townsMap.set(town, cost));
        }
      }
      else { // ако няма такъв град
        travel.get(country).set(town, cost);
      }
    }

  }

  console.table(travel);

  for (const [country, towns] of Array.from(travel)) {
    let printLine = "";
    printLine += (country + " -> ");
    for (const [town, cost] of Array.from(towns)) {
      printLine += (town + " -> " + cost + " ");
    }
    console.log(printLine);
  }
}
travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "Albania > Tirana > 1000",
  "France > Paris > 2000",
  // "Bulgaria > Sliven > 900",
  "Bulgaria > Sofia > 200",
  "Bulgaria > Sofia > 300",
]);