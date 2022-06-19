function train(inputArray) {
  let array = inputArray.slice();

  let wagonsOccupancy = array.shift().split(" ").map(Number);
  let maxCapacity = Number(array.shift());


  for (let currCommand of array) {
    let [command, number] = currCommand.split(" ");
    number = Number(number);

    switch (command) {
      case "Add":
        wagonsOccupancy.push(number);
        break;

      default:
        number = Number(command);

        for (let i = 0; i < wagonsOccupancy.length; i++) {
          currWagonOccupancy = Number(wagonsOccupancy[i]);
          if (currWagonOccupancy + number <= maxCapacity) {
            wagonsOccupancy[i] += number;
            break;
          }
        }

    }
  }
console.log(wagonsOccupancy.join(" "));

}
// train(["32 54 21 12 4 0 23", "75", "30", "10", "75"]);
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);