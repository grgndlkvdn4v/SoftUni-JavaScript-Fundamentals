function armies(input) {

  let leadersObj = {};
  
  for (const commandLine of input) {
    // let armiesObj = {};

    if (commandLine.includes("arrives")) { 
      let leader = commandLine.replace(' arrives', '');
      leadersObj[leader] = {};
      // leadersObj[leader] = armiesObj;
    }

    else if (commandLine.includes("defeated")) {
      let leader = commandLine.replace(' defeated', '');
      delete leadersObj[leader];
      
    }

    // add the army with its count to the leader (if he exists)
    else if (commandLine.includes(":")) {
      let [leader, army] = commandLine.split(': ');
      let [armyName, armyCount] = army.split(", ");
      armyCount = Number(armyCount);

      if (leadersObj.hasOwnProperty(leader)) {
        leadersObj[leader][armyName]= armyCount;
      }
    }

    // if the army exists somewhere add the count
    else if (commandLine.includes(" + ")) {
      let [armyName, armyCount] = commandLine.split(" + ");
      armyCount =  Number(armyCount);

      for (const [leader, army] of Object.entries(leadersObj)) {
        if (army.hasOwnProperty(armyName)) {
          army[armyName] += armyCount;
          // console.log("FOUNDDD");
        }
      }

    }

  }



  let leaderEntries = Object.entries(leadersObj);
  let sortedLeaderEntries = leaderEntries.sort( ([leaderA, armyA], [leaderB, armyB]) => 
    totalArmyCount(leaderB) - totalArmyCount(leaderA)
  );

  for (const [leader, army] of sortedLeaderEntries) {
    console.log(`${leader}: ${totalArmyCount(leader)}`);
    
    let armyEntries = Object.entries(army);
    let sortedArmyEntries = armyEntries.sort(
      ([armyNameA, armyCountA], [armyNameB, armyCountB]) => 
      armyCountB - armyCountA
    );

    for (const [armyName, armyCount] of sortedArmyEntries) {
      console.log(`>>> ${armyName} - ${armyCount}`);
    }
  }

  function totalArmyCount(leader) {
    let sum = 0;
    for ( const [armyName, armyCount] of Object.entries(leadersObj[leader]) ){
      sum += armyCount;
    }
    return sum
  }

  // console.table(leadersObj);
}
armies([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);