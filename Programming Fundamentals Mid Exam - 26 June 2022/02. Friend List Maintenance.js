function friendListMaintenance(input) {

  let friendsList = input.shift().split(", ");

  let blacklistedCounter = 0;
  let lostCounter = 0;
  

  while (input[0] !== "Report") {

    let [command, inputOne, inputTwo] = input.shift().split(" ");
    let index, name, newName;


    switch (command) {

      case "Blacklist":
        name = inputOne;

        if (friendsList.includes(name)) {
          blacklistedCounter++;
          console.log(`${name} was blacklisted.`);
          friendsList[friendsList.indexOf(name)] = "Blacklisted";
        } 
        else {
          console.log(`${name} was not found.`);
        }
        break;

      case "Error":
        index = Number(inputOne);
        name = friendsList[index];

        if (index >= 0 && index <= friendsList.length - 1) {
          
          if (name !== "Blacklisted" && name !== "Lost") {
            lostCounter++;
            friendsList[index] = "Lost"
            console.log(`${name} was lost due to an error.`);
          }

        }
        break;

      case "Change":
        index = Number(inputOne);
        name = friendsList[index];
        newName = inputTwo;

        if (index >= 0 && index <= friendsList.length - 1) {
          console.log(`${name} changed his username to ${newName}.`);
          friendsList[index] = newName;
        }

        break;

    }

  }

  console.log(`Blacklisted names: ${blacklistedCounter}`);
  console.log(`Lost names: ${lostCounter}`);
  console.log(friendsList.join(" "));
}

// friendListMaintenance(["Mike, John, Eddie",
// "Blacklist Mike",
// "Error 0",
// "Report"])
// ;

friendListMaintenance(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"])
;
