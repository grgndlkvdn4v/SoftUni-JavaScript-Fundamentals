function cookingMasterclass(input) {
  let budget = input[0];
  let students = input[1];
  let flourPrice = input[2];
  let eggPrice = input[3];
  let apronPrice = input[4];

  
  let apronCost = Math.ceil(students + (students * 0.2))* apronPrice;
  let eggCost = students * eggPrice * 10;
  let flourCost = (students - Math.floor(students / 5)) * flourPrice;
  
  let total = apronCost + eggCost + flourCost;

  if (total <= budget) {
    console.log(`Items purchased for ${total.toFixed(2)}$.`);
  } else {
    console.log(`${(total - budget).toFixed(2)}$ more needed.`);
  }

}
cookingMasterclass([50, 2, 1.0, 0.10, 10.0]);
cookingMasterclass([100, 25, 4.0, 1.0, 6.0]);