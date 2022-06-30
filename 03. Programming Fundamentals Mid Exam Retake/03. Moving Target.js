function movingTarget(input) {

  let targets = input.shift().split(" ").map(Number);

  while (input[0] !== "End") {
    let [command, index, num] = input.shift().split(" ");

    switch (command) {

      case "Shoot":
        // console.log(command, index, num);
        index = Number(index);
        let power = Number(num);

        if (index >= 0 && index <= (targets.length - 1)) {
          targets[index] -= power;
          if (targets[index] <= 0) {
            targets.splice(index, 1)
          }
        }

        break;
      
      case "Add":
        // console.log(command, index, num);
        index = Number(index);
        let value = Number(num);

        if (index >= 0 && index <= (targets.length - 1)) {
          targets.splice(index, 0, value)
        } else {
          console.log(`Invalid placement!`);
        }
        break;
      
      case "Strike":
        // console.log(command, index, num);
        index = Number(index);
        let radius = Number(num);

        if (index - radius >= 0 && index + radius <= (targets.length - 1)) {
          targets.splice(index - radius, (radius*2 + 1));
        } else {
          console.log("Strike missed!");
        }
        
        break;
      

    }

  }
  
  console.log(targets.join("|"));
}

// movingTarget([
//   "52 74 23 44 96 110",
//   "Shoot 5 10",
//   "Shoot 1 80",
//   "Strike 2 1",
//   "Add 22 3",
//   "End",
// ]);
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);