function adAstra(input) {
  let text = input[0];
  let foodArr = [];
  let totalCalories = 0;

  // let expirationDatePattern = /(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{2})/g;
  let pattern = /([\#\|])(?<item>[a-zA-Z ]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/gm;

  let matches;
  while ( (matches = pattern.exec(text)) !== null ) {

    let item = matches.groups['item'];
    let expDate = matches.groups['expDate'];
    let calories = Number( matches.groups['calories'] );

    totalCalories += calories;

    let obj = {item, expDate, calories};
    foodArr.push(obj);
  }


  console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
  
  for (const iterator of foodArr) {
    console.log(`Item: ${iterator.item}, Best before: ${iterator.expDate}, Nutrition: ${iterator.calories}`);
  }

}

// adAstra([
//   "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
// ]);

adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);