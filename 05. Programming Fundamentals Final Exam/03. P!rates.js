function pirates(input) {
  let citiesObj = {};

  let index = 0, commandLine;
  while ( (commandLine = input[index++]) !== 'Sail' ) {
    let [city, population, gold] = commandLine.split('||');
    population = Number(population);
    gold = Number(gold);

    if ( !citiesObj.hasOwnProperty(city) ) {
      citiesObj[city] = {population, gold}
    } else {
      citiesObj[city].population += population;
      citiesObj[city].gold += gold;
    }
  }


  while ( (commandLine = input[index++]) !== 'End' ) {
    let [command, ...tokens] = commandLine.split('=>');

    switch (command) {
      case 'Plunder': plunder(tokens); break;
      case 'Prosper': prosper(tokens); break;
    }
  }


  print(citiesObj);



  function plunder(tokens) {
    let [city, people, gold] = tokens;
    people = Number(people);
    gold = Number(gold);

    citiesObj[city].population -= people;
    citiesObj[city].gold -= gold;

    console.log( `${city} plundered! ${gold} gold stolen, ${people} citizens killed.` );

    if ( 
      citiesObj[city].population <= 0 || 
      citiesObj[city].gold <= 0
    ) {
      console.log( `${city} has been wiped off the map!` );
      delete citiesObj[city];
    }
  }

  function prosper(tokens) {
    let [city, gold] = tokens;
    gold = Number(gold);

    if ( gold < 0 ) {
      return console.log("Gold added cannot be a negative number!");
    }

    citiesObj[city].gold += gold;
    console.log( `${gold} gold added to the city treasury. ${city} now has ${citiesObj[city].gold} gold.` );

  }

  function print(citiesObj) {
    let count = Object.keys(citiesObj).length;
    
    if ( !count ) {
      console.log('Ahoy, Captain! All targets have been plundered and destroyed!"');
    } 
    else {
      console.log( `Ahoy, Captain! There are ${count} wealthy settlements to go to:` );
  
      for (const city in citiesObj) {
        console.log( `${city} -> Population: ${citiesObj[city].population} citizens, Gold: ${citiesObj[city].gold} kg` );
      }
    }

  }

  // console.table(citiesObj);
}
pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  // "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  // "Plunder=>Tortuga=>75000=>980",
  "Prosper=>Santo Domingo=>180",
  "End",
]);