function activationKeys(input) {
  let activationKey = input.shift();

  let commandsObj = {

    'Contains': (substring) => {

      if ( activationKey.includes(substring) ) {
        console.log( `${activationKey} contains ${substring}.` )
      } else {
        console.log( "Substring not found!" );
      }
    },

    'Flip': (whatCase, startIndex, endIndex) => {
      startIndex = Number( startIndex );
      endIndex   = Number( endIndex );

      let substr = activationKey.substring(startIndex, endIndex);
      switch (whatCase) {
        case 'Upper':
          activationKey = activationKey.replace(substr, substr.toUpperCase());
        break;

        case 'Lower':
          activationKey = activationKey.replace(substr, substr.toLowerCase());
        break;
      }

      console.log(activationKey);
    },

    'Slice': (startIndex, endIndex) => {
      startIndex = Number( startIndex );
      endIndex   = Number( endIndex   );

      let substr = activationKey.substring(startIndex, endIndex);
      activationKey = activationKey.replace(substr, '');
      
      console.log(activationKey);
    },

  };

  input.forEach(line => {
    if ( line !== 'Generate' ) {
      let [command, ...tokens] = line.split('>>>');
      commandsObj[command](...tokens);
    }
  });

  console.log( `Your activation key is: ${activationKey}` );
}

activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
