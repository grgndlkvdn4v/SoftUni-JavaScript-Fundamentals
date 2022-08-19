function heroRecruitment(input) {

  let heroesObj = {};
  
  let index = 0, commandLine;
  while ( (commandLine = input[index++]) !== 'End' ) {
    let [command, ...tokens] = commandLine.split(' ');
    
    switch (command) {
      case 'Enroll': enroll(tokens); break;
      // case 'Learn': learn(tokens); break;
      // case 'Unlearn': unlearn(tokens); break;
    
      default:
        break;
    }

  }

  function enroll(tokens) {
    let heroName = tokens[0];

    if ( !heroesObj.hasOwnProperty(heroName) ) {
      heroesObj.name = heroName;
    } else {
      console.log( `${heroName} is already enrolled` );
    }
  }

  function learn(tokens) {
    let heroName = tokens[0];
    let spellName = tokens[1];

    if ( !heroesObj.hasOwnProperty(heroName) ) {
      console.log( `${heroName} doesn't exist.` );
    } else if ( heroesObj[heroName][spellName] ) {
      console.log( `${heroName} has already learnt ${spellName}.` );
    } else {
      heroesObj[heroName] = spellName
    }
  }

  function unlearn(tokens) {
    let heroName = tokens[0];
    let spellName = tokens[1];

    if ( !heroesObj.hasOwnProperty(heroName) ) {
      console.log(`${heroName} doesn't exist.`);
    } else if ( heroesObj[heroName].hasOwnProperty(spellName) ) {
      console.log( `${heroName} doesn't know ${spellName}` );
    } else {
      delete heroesObj[heroName][spellName];
      // console.log( heroesObj[heroName][spellName] );
    }
  }


  console.table(heroesObj);
}

// heroRecruitment([
//   "Enroll Stefan",
//   "Enroll Peter",
//   "Enroll Stefan",
//   "Learn Stefan ItShouldWork",
//   "Learn John ItShouldNotWork",
//   "Unlearn George Dispel",
//   "Unlearn Stefan ItShouldWork",
//   "End",
// ]);

heroRecruitment([
  "Enroll Stefan",
  // "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn Stefan hiqmi",
  "Unlearn Stefan qnko",
  "End",
]);

// heroRecruitment([
//   "Enroll Stefan",
//   "Enroll Peter",
//   "Enroll John",
//   "Learn Stefan Spell",
//   "Learn Peter Dispel",
//   "End",
// ]);

