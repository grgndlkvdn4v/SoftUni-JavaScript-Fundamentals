function storeProvision(stockArr, orderedArr) {

  let currentStockObj = {};

    // обхождам първият масив и добавям в новият обект
    let iterations = stockArr.length;
  for (let index = 0; index < iterations; index++) {
    const product = stockArr[index++];
    const quantity = +stockArr[index];

    currentStockObj[product] = quantity
  }

    // обхождам вторият масив
    iterations = orderedArr.length;
  for (let index = 0; index < iterations; index++) {
    const product = orderedArr[index++];
    const quantity = +orderedArr[index];

    if (currentStockObj.hasOwnProperty(product)) {
      currentStockObj[product] += quantity;
    } else {
      currentStockObj[product] = quantity;
    }
  }

  // обхождам обекта и принтирам на конзолата
  for (const key in currentStockObj) {
      const value = currentStockObj[key];
      console.log(`${key} -> ${value}`);
  }

}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);