function dungeonestDark(dungeonesRooms) {

  let input = dungeonesRooms[0];
  let health = 100;
  let coins = 0;

  let isDead = false;

  let rooms = 1;
  let newArray = [];
  newArray[rooms - 1] = "";
  

  // цикъл за създаване на нов масив, удобен за работа
  for (let index = 0; index < input.length; index++) {
    const element = input[index];

    if (element === "|" || element === undefined) {
      rooms++;
      newArray[rooms - 1] = [""];
    } else {
      newArray[rooms - 1] += element;
    }
  }

  // цикъл за обхождане на стаите в Dungeon-а
  for (let currRoom = 0; currRoom <= rooms - 1; currRoom++) {
    let command = newArray[currRoom];
    let itemOrMonster = "", number = "";

    // цикъл за отделяне на команда и стойност
    for (let commandIndex = 0; commandIndex < command.length; commandIndex++) {
      let symbol = command[commandIndex];

      if (symbol.charCodeAt() >= 48 && symbol.charCodeAt() <= 57) {
        number += symbol
      } else if (symbol.charCodeAt() >= 97 && symbol.charCodeAt() <= 122) {
        itemOrMonster += symbol;
      }
    }

    number = Number(number);

    switch (itemOrMonster) {

      case "potion":
        if (health + number >= 100) {
        console.log(`You healed for ${100 - health} hp.`);
        health = 100;
        } else {
          console.log(`You healed for ${number} hp.`);
          health += number;
        }
          console.log(`Current health: ${health} hp.`);
        break;

      case "chest":
        console.log(`You found ${number} coins.`);
        coins += number;
      break;
    
      default:
        health -= number;
        if (health > 0) {
          console.log(`You slayed ${itemOrMonster}.`);
        } else {
          isDead = true;
          console.log(`You died! Killed by ${itemOrMonster}.`);
          console.log(`Best room: ${currRoom + 1}`);
          break;
        }
      break;
    }
    
    if (isDead) {
      break;
    }
  }

  if (!isDead) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }

}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
