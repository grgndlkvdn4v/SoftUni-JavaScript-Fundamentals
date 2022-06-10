function orders(product, quantity) {

  let price;
  let total;
  
  switch (product) {
    case "coffee":
      price = 1.50;
      console.log(coffee(price, quantity));
      break;

    case "coke":
      price = 1.40;
      console.log(coke(price, quantity));
      break;

    case "water":
      price = 1;
      console.log(water(price, quantity));
      break;

      case "snacks":
        price = 2;
        console.log(snacks(price, quantity));
        break;

  }

  function coffee(price, quantity) {
    total = price * quantity;
    return total.toFixed(2);
  }

  function water(price, quantity) {
    total = price * quantity;
    return total.toFixed(2);
  }

  function coke(price, quantity) {
    total = price * quantity;
    return total.toFixed(2);
  }

  function snacks(price, quantity) {
    total = price * quantity;
    return total.toFixed(2);
  }

}
// orders("water", 5);
orders("coffee", 2);