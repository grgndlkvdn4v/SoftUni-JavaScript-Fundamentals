function shootForTheWin(input) {

  let targets = input.shift().split(" ").map(Number);

  let shootTargets = 0;
  
  while(input[0] !== "End") {
    let index = Number( input.shift() );

    if (index >= 0 && index <= targets.length - 1) {

      let check = targets[index];
      if (check !== -1) {

        targets[index] = -1;
        shootTargets++;

        for (let i = 0; i < targets.length; i++) {
          let currTarget = targets[i];

          if (currTarget !== -1) {

            if (currTarget > check) {
              targets[i] -= check;
            } else {
              targets[i] += check;
            }

          }
        }
      }
    }
  }

  console.log(`Shot targets: ${shootTargets} -> ${targets.join(" ")}`);
}

// shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);