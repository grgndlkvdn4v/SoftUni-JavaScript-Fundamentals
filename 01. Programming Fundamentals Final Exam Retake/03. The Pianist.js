function thePianist(input) {
  let pieces = Number( input.shift() );
  let playlistObj = {};

  for (let i = 0; i < pieces; i++) {
    let [piece, composer, key] = input[i].split('|');
    playlistObj[piece] = {composer, key}
  }

  let index = 0, commandLine;
  while ( (commandLine = input[index++]) !== "Stop" ) {
    if ( commandLine.includes('Add') ) {
      add(commandLine);
    } 
    else if ( commandLine.includes('Remove') ) {
      remove(commandLine);
    } 
    else if ( commandLine.includes('ChangeKey') ) {
      changeKey(commandLine);
    }
  }


  for ( const [piece, pieceObj] of Object.entries(playlistObj) ) {
    console.log(`${piece} -> Composer: ${pieceObj.composer}, Key: ${pieceObj.key}`);
  }


  function add(commandLine) {
    let [command, piece, composer, key] = commandLine.split('|');
    let obj = {composer, key};

    if (!playlistObj.hasOwnProperty(piece)) {
      playlistObj[piece] = obj;
      console.log(`${piece} by ${composer} in ${key} added to the collection!`);
    } else {
      console.log(`${piece} is already in the collection!`);
    }
  }

  function remove(commandLine) {
    let [command, piece] = commandLine.split('|')

    if (playlistObj.hasOwnProperty(piece)) {
      delete playlistObj[piece];
      console.log(`Successfully removed ${piece}!`);
    } else {
      console.log(`Invalid operation! ${piece} does not exist in the collection.`);
    }
  }

  function changeKey(commandLine) {
    let [command, piece, newKey] = commandLine.split('|')

    if (playlistObj.hasOwnProperty(piece)) {
      playlistObj[piece].key = newKey;
      console.log(`Changed the key of ${piece} to ${newKey}!`);
    } else {
      console.log(`Invalid operation! ${piece} does not exist in the collection.`);
    }
  }


}

thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);