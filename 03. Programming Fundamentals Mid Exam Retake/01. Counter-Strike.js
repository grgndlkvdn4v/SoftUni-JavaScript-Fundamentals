function counterStrike(input) {

  let energy = Number( input.shift() );

  let battlesWon = 0;
  let isEnergyEnough = true;


  let index = 0;
  while (input[index] !== "End of battle") {
    let distance = Number( input[index] );

    if (energy >= distance) {
      energy -= distance;
      battlesWon++;

      if (battlesWon % 3 === 0) {
        energy += battlesWon;
      }
    } 
    else {  // energy < 0
      isEnergyEnough = false;
      console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`);
      break;
    }

    // console.log(energy, distance);
    index++
  }


  if (isEnergyEnough) {
    console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
  }

}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
// counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
// counterStrike(["50", "10", "10", "13", "10", "10", "End of battle"]);
