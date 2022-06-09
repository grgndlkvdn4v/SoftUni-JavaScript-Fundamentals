function tseamAccount(array) {
  // array.splice(start, deleteCount, 'c')
  
  let gameSequence = array[0];
  let newArr = [];
  let currGame = "";

  // цикъл за превръщане на входа в нов масив, с който ще се работи
  for (let index = 0; index <= gameSequence.length; index++) {
    let currSymbol = gameSequence[index];

    if (currSymbol === " " || currSymbol == undefined) {
      newArr.push(currGame);
      currGame = ""
    } else {
      currGame += currSymbol
    }
  }

  // While цикъл за чакане на команда "Play"
  let command = 1;
  while (array[command] !== "Play!") {
  
    let currCommand = array[command++];
  
    if (currCommand.includes("Install ")) {
      let currGame = currCommand.slice(8)
      if (!newArr.includes(currGame)) {
        newArr.push(currGame)
      }
    }

    else if (currCommand.includes("Uninstall ")) {
      let currGame = currCommand.slice(10)
      if (newArr.includes(currGame)) {
        let currGameIndex = newArr.indexOf(currGame);
        newArr.splice(currGameIndex, 1)
      }
    }

    else if (currCommand.includes("Update ")) {
      let currGame = currCommand.slice(7);
      if (newArr.includes(currGame)) {
        let currGameIndex = newArr.indexOf(currGame);
        newArr.splice(currGameIndex, 1);
        newArr.push(currGame)
      }


      // newArr.push(currCommand.slice(7));
      // // newArr.splice(currCommand.slice(7), 1)
      // newArr.splice(newArr.indexOf("Diablo"), 1);
    }

    else if (currCommand.includes("Expansion ")) {
      let expansionGame = (currCommand.slice(10))
    
      let isFound = false;
      // Обхождам новият масив за да намери и добави новата игра
      for (let index = 0; index < newArr.length; index++) {
        let currGame = newArr[index];
        if (expansionGame.includes(currGame)) {
          isFound = true;
          newArr.splice(index + 1, 0, expansionGame)
        }
        if (isFound)
          break;
      }
      
    }

  }

  console.log(newArr.join(" "));


}
// tseamAccount(['CS WoW Diablo',
// 'Install LoL',
// 'Uninstall WoW',
// 'Update Diablo',
// 'Expansion CS-Go',
// 'Play!']
// );
tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
);