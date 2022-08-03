function heroesOfCodeAndLogic(input) {
  let iterations = Number( input.shift() );
  let partyObj = {};

  for (let i = 0; i < iterations; i++) {
    let commandLine = input[i];
    let [hero, health, mana] = commandLine.split(' ');
    health = Number( health );
    mana = Number( mana );

    partyObj[hero] = {health, mana};
  }

  let index = iterations, commandLine;
  while ( (commandLine = input[index++]) !== "End" ) {
    // console.log(commandLine);

    if ( commandLine.startsWith('CastSpell') ) {
      castSpell(commandLine);
    } else if ( commandLine.startsWith('TakeDamage') ) {
      takeDamage(commandLine);
    } else if ( commandLine.startsWith('Recharge') ) {
      recharge(commandLine);
    } else if ( commandLine.startsWith('Heal') ) {
      heal(commandLine);
    } else {
      console.log('invlid input');
    }

  }

  function castSpell(commandLine) {
    let [command, heroName, manaNeeded, spellName] = commandLine.split(' - ');
    manaNeeded = Number( manaNeeded );

    if ( partyObj[heroName].mana < manaNeeded ) {
      console.log( `${heroName} does not have enough MP to cast ${spellName}!` );
    } else {
      partyObj[heroName].mana -= manaNeeded;
      console.log( `${heroName} has successfully cast ${spellName} and now has ${partyObj[heroName].mana} MP!` );
    }

  }

  function takeDamage(commandLine) {

    let [command, heroName, damage, attacker] = commandLine.split(' - ');
    damage = Number( damage );

    partyObj[heroName].health -= damage;

    if ( partyObj[heroName].health <= 0 ) {
      console.log( `${heroName} has been killed by ${attacker}!` );
      delete partyObj[heroName];
    } else {
      console.log( `${heroName} was hit for ${damage} HP by ${attacker} and now has ${partyObj[heroName].health} HP left!` );
    }

  }

  function recharge(commandLine) {
    let maxMP = 200;
    let [command, heroName, amount] = commandLine.split(" - ");
    amount = Number(amount);

    if ( partyObj[heroName].mana + amount <= maxMP ) {
      partyObj[heroName].mana += amount;
    } else {
      let healedFor = maxMP - partyObj[heroName].mana;
      amount = healedFor;
      partyObj[heroName].mana = maxMP;
    }

    console.log( `${heroName} recharged for ${amount} MP!` );
  }

  function heal(commandLine) {
    let maxHP = 100;
    let [command, heroName, amount] = commandLine.split(" - ");
    amount = Number(amount);

    if ( partyObj[heroName].health + amount <= maxHP ) {
      partyObj[heroName].health += amount;
    } else {
      let healedFor = maxHP - partyObj[heroName].health;
      amount = healedFor;
      partyObj[heroName].health = maxHP;
    }

    console.log( `${heroName} healed for ${amount} HP!` );
  }

  // console.table(partyObj);
  for (const hero in partyObj) {
    console.log(hero);
    console.log('  ' + `HP: ${partyObj[hero].health}`);
    console.log('  ' + `MP: ${partyObj[hero].mana}`);
  }

}
heroesOfCodeAndLogic([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  // "Heal - Solmyr - 40",
  "Recharge - Solmyr - 50",
  // "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  // "TakeDamage - Kyrre - 33 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  // "CastSpell - Kyrre - 35 - ViewEarth",
  "End",
]);