function arenaTier(input) {

  let gladiatorsObj = {};
  
  let index = 0
  while (input[index] !== "Ave Cesar") {

    let commandLine = input[index++];

    if (commandLine.includes("vs")) {
      versus(commandLine);
    } 
    else {
      addToObj(commandLine);
    }

  }


  let entries = Object.entries(gladiatorsObj);
  let sortedEntries = 
  entries.sort( ([nameA, techniquesA], [nameB, techniquesB]) => 
    totalPoints(nameB) - totalPoints(nameA) || nameA.localeCompare(nameB)
  );

  for (const [name, techniques] of sortedEntries) {
    console.log(`${name}: ${totalPoints(name)} skill`);

    let techniquesEntries = Object.entries(techniques);
    let sortedtechniquesEntries = 
    techniquesEntries.sort( ([techniqueA, skillA], [techniqueB, skillB]) => 
      skillB - skillA || techniqueA.localeCompare(techniqueB) 
    );

    for (const [technique, skill] of sortedtechniquesEntries) {
      console.log(`- ${technique} <!> ${skill}`);
      
    }
  }


//===============     FUNCTIONS     ===============
  function versus(commandLine) {
    let [gladiatorOne, gladiatorTwo] = commandLine.split(" vs ");

    if(gladiatorsObj[gladiatorOne] && gladiatorsObj[gladiatorTwo]) {
  
      for ( let technique of Object.keys(gladiatorsObj[gladiatorOne]) ) {
        if ( Object.keys(gladiatorsObj[gladiatorTwo] ).includes(technique) ) {
          // WHAT IF  gladiatorOne === gladiatorTwo ????

          if (totalPoints(gladiatorOne) > totalPoints(gladiatorTwo)) {
            delete gladiatorsObj[gladiatorTwo];
          } 
          else if (totalPoints(gladiatorOne) < totalPoints(gladiatorTwo)){
            delete gladiatorsObj[gladiatorOne];
          }

        }

      }
    }

  }

  function addToObj(commandLine) {
    let [gladiator, technique, skill] = commandLine.split(" -> ");
      skill = Number(skill);

      let techniqueObj = {};
      techniqueObj[technique] = skill;
      
      if (!gladiatorsObj.hasOwnProperty(gladiator)) { // Има ли такъв гладиатор
        gladiatorsObj[gladiator] = techniqueObj;
      } 
      else {   // ако няма такъв гладиатор
        
        // Ако няма такава техника
        if (!gladiatorsObj[gladiator].hasOwnProperty(technique)) {
          gladiatorsObj[gladiator][technique] = skill;
        } 
        else { // Ако има такава техника ги сравни 
          if (skill > gladiatorsObj[gladiator][technique]) {
            gladiatorsObj[gladiator][technique] = skill;
          }
        }

      }
  }

  function totalPoints(gladiator) {
    let sum = 0;
    for ( const skill of Object.values(gladiatorsObj[gladiator]) ) {
      sum += +skill;
    }
    return sum
  }
//=================================================
  

  // console.table(gladiatorsObj);
  // console.table(sortedEntries);
}
// arenaTier([
//   "Peter -> BattleCry -> 400",
//   "Alex -> PowerPunch -> 300",
//   "Alex -> PowerPunch -> 550",
//   "Stefan -> Duck -> 200",
//   "Stefan -> Duck -> 300",
//   "Stefan -> Tiger -> 250",
//   "Stefan -> Tiger -> 100",
//   "Ave Cesar",
// ]);

arenaTier([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);