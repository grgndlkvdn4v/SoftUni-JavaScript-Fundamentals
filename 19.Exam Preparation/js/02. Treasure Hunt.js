function treasureHunt(input) {

  let loot = input.shift().split("|");
  
  index = 0;
  while (input[index] !== "Yohoho!") {

    command = input[index++];
    command = command.split(" ");
    action = command.shift();
    
    switch (action) {

      case "Loot":
        // console.log(action, command);
        for (let i = 0; i < command.length; i++) {
          let item = command[i];

          if (loot.includes(item)) {
            continue;
          } else {
            loot.unshift(item);
          }
        }

        break;


      case "Drop":
        // console.log(action, command);
        let dropIndex = Number(command);
        let invalidIndex = (dropIndex < 0 || dropIndex > loot.length - 1);

        if (invalidIndex) {
          continue;
        } else {
          let removeItem = loot.splice(dropIndex, 1);
          loot.push(removeItem.join(" "));
        }

        break;


      case "Steal":
        // console.log(action, command);
        let stolenItemsNumber = Number(command);

        // if (stolenItemsNumber >= loot.length) {
        //   stolenItems = loot.slice();
        //   loot = [];
        // } else {
          let stolenItems = loot.splice(-stolenItemsNumber);
          console.log(stolenItems.join(", "));
        // }

        break;

    }
    
  }

  
  if (loot.length <= 0) {
    console.log("Failed treasure hunt.");
  } 
  else {
    let sumItemsLength = 0;
    let lengthAdd = loot.map(x => sumItemsLength += x.length);
    let average = sumItemsLength / loot.length

    console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
  }

}

treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 7",
  "Yohoho!"
]);
// treasureHunt((["Diamonds|Silver|Shotgun|Gold",
// "Loot Silver Medals Coal",
// "Drop -1",
// "Drop 1",
// "Steal 6",
// "Yohoho!"])
// );