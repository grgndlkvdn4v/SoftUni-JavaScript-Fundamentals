function storeProvision(stock, ordered) {

  class Product {
    constructor (name, quantity) {
      this.name = name;
      this.quantity = quantity;
    }

    print() {
      console.log(`${this.name} -> ${this.quantity}`);
    }
  }

  let newArr = [];
  // добавям елементите от първият масив;
  for (let i = 0; i < stock.length; i++) {
    let product = stock[i++];
    let quantity = Number(stock[i]);
    newArr.push(product);
    newArr.push(quantity);
  }

  // добавям елементите от вторият масив;
  for (let i = 0; i < ordered.length; i++) {
    let product = ordered[i++];
    let quantity = Number(ordered[i]);

    if (newArr.includes(product)) {
      quantityIndex = newArr.indexOf(product) + 1;
      newArr[quantityIndex] += quantity
    } else {
      newArr.push(product);
      newArr.push(quantity);
    }
  }

  // итерирам през новият масив и извиквам методът
  for (let i = 0; i < newArr.length; i++) {
    let productName = newArr[i++];
    let quantity = newArr[i];

    let product = new Product(productName, quantity)
    product.print();
  }

}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);