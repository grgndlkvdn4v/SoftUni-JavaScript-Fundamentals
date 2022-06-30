function computerStore(input) {

  let totalWithoutTax = 0;
  let taxTotal = 0;
  let total = 0;
  
  let index = 0
  while ( input[index] !== "special" && 
          input[index] !== "regular" ) {
    
    let currPrice = Number(input[index++]);

    if (currPrice < 0) {
      console.log("Invalid price!");
      continue;
    }

    totalWithoutTax +=  currPrice;

    let tax = currPrice * 0.2;
    taxTotal += tax;
    
    total += currPrice + tax;
  }


  if (total === 0) {
    console.log("Invalid order!");
  } else {

    if (input[index] === "special") {
      total -= total * 0.1;
    }

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${totalWithoutTax.toFixed(2)}$`);
    console.log(`Taxes: ${taxTotal.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${total.toFixed(2)}$`);
  }
}
// computerStore(["special"]);
computerStore(["1050", "200", "450","-3", "2", "18.50", "16.86", "special"]);
  