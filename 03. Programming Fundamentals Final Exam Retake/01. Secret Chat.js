function secretChat(input) {
  let message = input.shift();

  let index = 0, commandLine;
  while ( (commandLine = input[index++]) !== 'Reveal' ) {
    
    if ( commandLine.startsWith('InsertSpace') ) {
      insertSpace(commandLine);
    
    }  else if ( commandLine.startsWith('Reverse') ) {
      reverseStr(commandLine);

    } else if ( commandLine.startsWith('ChangeAll') ) {
      changeAll(commandLine);
    }

  }

  console.log( `You have a new text message: ${message}` );
  

  function insertSpace(commandLine) {
    let [command, index] = commandLine.split(':|:');
    index = Number(index);
    
    message = message.split('');
    message.splice(index, 0, ' ');
    message = message.join('');

    console.log(message);
  }

  function reverseStr(commandLine) {
    let [command, substring] = commandLine.split(':|:');
    let replaceStr = substring.split(''). reverse().join('');
    
    if ( !message.includes(substring) ) {
      console.log('error');
    } else {
      message = message.replace(substring, '')
      message = message.concat(replaceStr);
      console.log(message);
    }
  }

function changeAll(commandLine) {
  let [command, substring, replacement] = commandLine.split(':|:');
  
  while ( message.includes(substring) ) {
    message = message.replace(substring, replacement)
  }

  console.log(message);
}

}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);