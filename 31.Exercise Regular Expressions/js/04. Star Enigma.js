function starEnigma(input) {
  let messages = Number( input.shift() );
  
  let extractPattern = /[star]/gmi;
  let pattern = /[^@\-\!\:>]*@(?<planet>[a-zA-Z]+)[^@\-\!\:>]*:(?<population>[0-9]+)[^@\-\!\:>]*!(?<attackType>[AD])![^@\-\!\:>]*->(?<soldierCount>[0-9]+)/gm;

  for (let message of input) {
    let encriptedMessage = decrypt(message);
    console.log(encriptedMessage);
    hui(encriptedMessage);
    console.log("==============================================");
  }


  function hui(encriptedMessage) {
    let attackInfo = pattern.exec(encriptedMessage);
    console.log(attackInfo);

    let planet = attackInfo.groups['planet'];
    let population = Number( attackInfo.groups['population'] );
    let attackType = attackInfo.groups['attackType'];
    let soldierCount = Number( attackInfo.groups['soldierCount'] );

    console.log(planet, population, attackType, soldierCount);
  }
  
  function decrypt(message) {
    let matches = message.match(extractPattern);
    let encripted = "";

    for (const symbol of message) {
      let newSymbol = symbol.charCodeAt(0) - matches.length;
      encripted += String.fromCharCode(newSymbol);
    }

    return encripted;
  }

}

starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);