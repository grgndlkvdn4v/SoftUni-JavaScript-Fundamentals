function theImitationGame(input) {

  let message = input.shift();

  let index = 0, commandLine;
  while ( (commandLine = input[index++]) !== 'Decode' ) {

    if ( commandLine.includes("Move") ) {
      move(commandLine);
    } else if ( commandLine.includes("Insert") ) {
      insert(commandLine);
    } else if ( commandLine.includes("ChangeAll") ) {
      changeAll(commandLine);
    }
  }

  console.log(`The decrypted message is: ${message}`);

  function move(commandLine) {
    let [command, n] = commandLine.split('|');
    n = Number(n);
    let messageArr = message.split("");

    for (let i = 1; i <= n; i++) {
      let cuttedEl = messageArr.splice(0, 1);
      messageArr.push(cuttedEl[0]);
    }
    
    message = messageArr.join("");
    return message;
  }

  function insert(commandLine) {
    let [command, index, value] = commandLine.split('|');
    index = Number(index);

    let leftSide = message.slice(0, index);
    let rightSide = message.slice(index);
    let result = leftSide.concat(value.concat(rightSide));
    message = result;

    return message;
  }

  function changeAll(commandLine) {
    let [command, substring, replacement] = commandLine.split('|');
    while (message.includes(substring)) {
      message = message.replace(substring, replacement);
    }
    return message;
  }

}

theImitationGame([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode',
]);

theImitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);