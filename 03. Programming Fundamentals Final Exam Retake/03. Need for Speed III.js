function needForSpeedThree(input) {
  let initialInputs = Number(input.shift());

  let garageObj = {};

  for (let i = 0; i < initialInputs; i++) {
    let commandLine = input[i];
    let [car, miletage, fuel] = commandLine.split("|");
    miletage = Number(miletage);
    fuel = Number(fuel);

    garageObj[car] = { miletage, fuel };
  }

  let index = initialInputs, commandLine;
  while ((commandLine = input[index++]) !== "Stop") {
    if (commandLine.startsWith("Drive")) {
      drive(commandLine);
    } else if (commandLine.startsWith("Refuel")) {
      refuel(commandLine);
    } else if (commandLine.startsWith("Revert")) {
      revert(commandLine);
    } else {
      console.log("DID NOT MEET EXPECTED INPUT");
    }
  }
  
  for (const car in garageObj) {
    console.log( `${car} -> Mileage: ${garageObj[car].miletage} kms, Fuel in the tank: ${garageObj[car].fuel} lt.` );
  }
  
  
  function drive(commandLine) {
    let [command, car, distance, fuel] = commandLine.split(" : ");
    distance = Number(distance);
    fuel = Number(fuel);
    
    if (garageObj[car].fuel >= fuel) {
      garageObj[car].fuel -= fuel;
      garageObj[car].miletage += distance;
      console.log(
        `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );
      } else {
        console.log("Not enough fuel to make that ride");
      }
      
      if (garageObj[car].miletage >= 100000) {
        console.log( `Time to sell the ${car}!` );
        delete garageObj[car];
      }
    }
    
    function refuel(commandLine) {
      let [command, car, fuel] = commandLine.split(" : ");
      fuel = Number(fuel);
      
      let tankMax = 75;
      let refill;
      
      if (garageObj[car].fuel + fuel <= tankMax) {
        refill = fuel;
        garageObj[car].fuel += fuel;
      } else {
        refill = tankMax - garageObj[car].fuel;
        garageObj[car].fuel = tankMax;
      }
      
      console.log(`${car} refueled with ${refill} liters`);
    }
    
    function revert(commandLine) {
      let [command, car, kilometers] = commandLine.split(" : ");
      kilometers = Number(kilometers);
      
      garageObj[car].miletage -= kilometers;
      
      if (garageObj[car].miletage < 10000) {
        garageObj[car].miletage = 10000;
      } else {
        console.log(`${car} mileage decreased by ${kilometers} kilometers`);
      }
      
    }
    
    // console.table(garageObj);
    
  }
  needForSpeedThree([
    "3",
    "Audi A6|38000|62",
    "Mercedes CLS|11000|35",
    "Volkswagen Passat CC|45678|5",
    "Drive : Audi A6 : 543 : 47",
    "Drive : Mercedes CLS : 94 : 11",
    "Drive : Volkswagen Passat CC : 69 : 8",
    "Refuel : Audi A6 : 50",
    "Revert : Mercedes CLS : 500",
    "Revert : Audi A6 : 30000",
    "Stop",
  ]);
  