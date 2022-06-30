function memoryGame(input) {

  let sequence = input.shift().split(" ");

  let turnsCounter = 0;
  let win = false;
  
  index = 0;
  while (input[index] !== "end") {
    turnsCounter++;
    let command = input[index];
    command = command.split(" ")

    let firstIndex = command[0];
    let firstNum = sequence[firstIndex];
    let secondIndex = command[1];
    let secondNum = sequence[secondIndex]

    let wrongInputCondition = (
      firstIndex === secondIndex ||
      firstIndex > sequence.length - 1 ||
      firstIndex < 0 ||
      secondIndex > sequence.length - 1 ||
      secondIndex < 0  );

      if (wrongInputCondition) {
        let start = (sequence.length) / 2;
        let addEl = "-" + turnsCounter + "a";
        console.log("Invalid input! Adding additional elements to the board");
        sequence.splice(start, 0, addEl, addEl)
      } 
      else if (firstNum === secondNum) {
        console.log(`Congrats! You have found matching elements - ${firstNum}!`);
        let biggerIndex = Math.max(firstIndex, secondIndex);
        let smallestIndex = Math.min(firstIndex, secondIndex);
        sequence.splice(biggerIndex, 1);
        sequence.splice(smallestIndex, 1);
      }
      else if (firstNum !== secondNum) {
        console.log("Try again!");
        index++;
        continue;
      }


      if (sequence.length === 0) {
        win = true;
        break;
      }

    index++;
  }

  
  if (win) {
    console.log(`You have won in ${turnsCounter} turns!`);
  } else {
    console.log(`Sorry you lose :(`);
    console.log(sequence.join(" "));
  }

}
memoryGame( [
  "1 1 2 2 3 3 4 4 5 5", 
  "1 0",
  "-1 0",
  "1 0", 
  "1 0", 
  "1 0", 
  "end"
  ]
  );
  // memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
  // memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);