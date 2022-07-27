function race(input) {

  let participantsArr = input.shift().split(", ");
  let lettersPattern   = /[a-zA-Z]+/gm;
  let digitsPattern = /\d+/gm;

  let obj = {};
  
  let index = 0, command;
  while ( (command = input[index++]) !== 'end of race' ) {
    let name = command.match(lettersPattern).join('');
    let numbersMatches = command.match(digitsPattern);

    if (!participantsArr.includes(name)) {
      continue;
    }

    if (!obj.hasOwnProperty(name)) {
      obj[name] = distance(numbersMatches);
    } else {
      obj[name] += distance(numbersMatches);
    }
  }

  let entries = Object.entries(obj);
  let sortedEntries = entries.sort(
    ( [nameA, distanceA], [nameB, distanceB] ) => 
    distanceB - distanceA
  );

  console.log(`${1}st place: ${sortedEntries[0][0]}`);
  console.log(`${2}nd place: ${sortedEntries[1][0]}`);
  console.log(`${3}rd place: ${sortedEntries[2][0]}`);


  function distance(numbersMatches) {
    let sum = 0;

    numbersMatches
      .join("")
      .split("")
      .forEach(el => sum += +el);
    return sum;
  }

}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);