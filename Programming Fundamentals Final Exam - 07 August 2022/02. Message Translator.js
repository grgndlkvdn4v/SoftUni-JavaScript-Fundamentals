  function messageTranslator(input) {
    let iterations = input.shift();
    
    let pattern = /\!(?<command>[A-Z][a-z]{2,})\!:\[(?<message>\w+)\]/g;
    
    
    for (const iterator of input) {
      // console.log(iterator);
      
      let matches = pattern.exec(iterator)

      if (matches === null) {
        console.log( 'The message is invalid' );
      } else {

        let command = matches.groups['command'];
        let message = matches.groups['message'];
        // let translatedMessage = message.split('');
        translatedMessage = message.split('').map(el => {
          return el.charCodeAt(0)
        });
        console.log(`${command}: ${translatedMessage.join(' ')}`);
        // console.log(command, message);
      }
    }

  }

// messageTranslator(["2",
// "!Send!:[IvanisHere]",
// "*Time@:[Itis5amAlready"]
// );

messageTranslator([
  "3",
  "go:[outside]",
  "!drive!:YourCarToACarWash",
  "!Watch!:[LordofTheRings]",
]);