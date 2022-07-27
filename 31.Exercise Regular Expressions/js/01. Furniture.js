function furniture(input) {

  let regexp = />>(?<furniture>[A-Z]\w+)<<(?<price>\d+\.*\d*)!(?<quantity>\d+)/g;

  console.log('Bought furniture:');
  let sum = 0;

  let execArr;
  while ( (execArr = regexp.exec(input)) !== null ) {

    let furniture = execArr.groups['furniture'];
    let price = Number( execArr.groups['price'] );
    let quantity = Number( execArr.groups['quantity'] );
    
    console.log(furniture);
    sum += price * quantity;
  }

  console.log(`Total money spend: ${sum.toFixed(2)}`);
}
furniture([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);