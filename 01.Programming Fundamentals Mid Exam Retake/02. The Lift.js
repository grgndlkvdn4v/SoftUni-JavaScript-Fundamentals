function theLift(input) {
  
  let queue = Number(input.shift());
  let liftCurrState = input.pop().split(" ").map(Number);

  for (let index = 0; index < liftCurrState.length; index++) {
    let currLift = liftCurrState[index];
    
    if (currLift < 4 ) {
      let difference = 4 - currLift;
      
      if (queue < 4) {
        currLift += queue;
        queue -= queue
      } else {
        queue -= difference;
        currLift += difference;
      }

    }

    liftCurrState[index] = currLift;

    if (queue <= 0) {
      break;
    }
    
  }


  // проверка дали има празни вагони
  let isFull = liftCurrState.filter( x => x != 4);

//•	If there are no more people and the lift have empty spots
  if (isFull.length > 0) {
    console.log("The lift has empty spots!");
    console.log(liftCurrState.join(" "));
  }
// •	If the lift is full and there are no more people in the queue
  else if (isFull.length <= 0 && queue === 0 ) {
    console.log(liftCurrState.join(" "));
  }
//•	If there are still people in the queue and no more available space
  else if (queue > 0 ) {
    console.log(`There isn't enough space! ${queue} people in a queue!`);
    console.log(liftCurrState.join(" "));
  }

}
// theLift(["15", "0 0 0 0 0"]);
// theLift(["20", "0 2 0"]);
theLift(["10", "0 2 0"]);
