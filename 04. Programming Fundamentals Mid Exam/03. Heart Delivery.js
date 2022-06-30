function heartDelivery(input) {

  let neighborhood = input.shift().split("@").map(Number);

  let arrIndex = 0;
  let [jump, jumpLength] = input.shift().split(" ");
  while (jump !== "Love!") {
    
    jumpLength = Number(jumpLength)
    arrIndex += jumpLength;
    
    if (arrIndex > neighborhood.length - 1) {
      arrIndex = 0;
    }
    
    // let currHouse = neighborhood[arrIndex];
    neighborhood[arrIndex] -= 2;

    if (neighborhood[arrIndex] < 0) {
      neighborhood[arrIndex] = 0;
      console.log(`Place ${arrIndex} already had Valentine's day.`);
    } 
    else if (neighborhood[arrIndex] === 0) {
      console.log(`Place ${arrIndex} has Valentine's day. `);
    } 

    [jump, jumpLength] = input.shift().split(" ");
  }

  console.log(`Cupid's last position was ${arrIndex}.`);
  neighborhood = neighborhood.filter(el => el > 0);
  
  if (neighborhood.length > 0) {
    console.log(`Cupid has failed ${neighborhood.length} places.`);
  } else {
    console.log("Mission was successful.");
  }


}
// heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Jump 10", "Jump 10", "Jump 10", "Jump 10", "Jump 10", "Love!"]);
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
// heartDelivery([
//   "2@4@2",
//   "Jump 2",
//   "Jump 2",
//   "Jump 8",
//   "Jump 3",
//   "Jump 1",
//   "Love!",
// ]);
