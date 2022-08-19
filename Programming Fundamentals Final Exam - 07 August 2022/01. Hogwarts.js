function hogwarts(input) {
  let spell = input.shift();
  
  let index = 0, commandLine;
  while ( (commandLine = input[index++]) !==  'Abracadabra') {
    let [command, ...tokens] = commandLine.split(' ');

    switch (command) {

      case 'Abjuration':
        spell = spell.toUpperCase();
        console.log(spell);
      break;

      case 'Necromancy':
        spell = spell.toLowerCase();
        console.log(spell);
      break;

      case 'Illusion':
        let index = Number( tokens[0] );
        let letter = tokens[1];
    
        if ( index < 0 || index >= spell.length ) {
          console.log( "The spell was too weak." );
        } 
        else {
          spell = spell.split('');
          spell.splice(index, 1, letter);
          spell = spell.join('');
          
          console.log('Done!');
        }  
      break;

      case 'Divination':
        let firstSubstr = tokens[0];
        let secondSubstr = tokens[1];

        if (!spell.includes(firstSubstr)) {
          return spell
        }

        while ( spell.includes(firstSubstr) ) {
          spell = spell.replace(firstSubstr, secondSubstr)
        }
        console.log(spell);
      break;

      case 'Alteration': 
      let substr = tokens[0];
      
      if ( spell.includes(substr) ) {
        spell = spell.replace(substr, '')
        console.log(spell);
      }
      break;

      default: console.log("The spell did not work!"); break;
    }
  }

}
// hogwarts([
//   "A7ci0",
//   "Illusion 1 c",
//   "Illusion 4 o",
//   "Abjuration",
//   "Abracadabra",
// ]);

// hogwarts([
//   "A7ci0",
//   "Abjuration",
//   "Necromancy",
//   "Divination a7 REPLACE",
//   // "Illusion 1 c",
//   // "Illusion 4 o",
//   "Abracadabra",
// ]);

// hogwarts([
//   "TR1GG3R",
//   "Necromancy",
//   "Illusion 8 m",
//   "Illusion 9 n",
//   "Abracadabra",
// ]);

hogwarts([
  "SwordMaster",
  "Target Target Target",
  "Abjuration",
  "Necromancy",
  "Alteration master",
  // "ebanevguza",
  "Abracadabra",
]);
