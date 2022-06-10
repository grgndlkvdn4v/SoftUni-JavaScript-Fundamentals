function orders(product, quantity) {

  let price;
  let total;
  
  switch (product) {
    case "coffee":
      price = 1.50;
      total = (price, quantity) => price * quantity;
      break;

    case "coke":
      price = 1.40;
      total = (price, quantity) => price * quantity;
      break;

    case "water":
      price = 1;
      total = (price, quantity) => price * quantity;
      break;

      case "snacks":
        price = 2;
        total = (price, quantity) => price * quantity;
        break;

  }

  console.log((total(price, quantity)).toFixed(2));

}
orders("water", 5);
orders("coffee", 2);