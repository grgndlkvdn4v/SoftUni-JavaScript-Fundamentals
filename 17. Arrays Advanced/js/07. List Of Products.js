function listOfProducts(input) {
  
  let newArr = input.slice(); // копирам масива !!
  newArr.sort( (a, b) => a.localeCompare(b) );

  for (let index = 0; index < newArr.length; index++) {
    newArr[index] = (index + 1) + "." + newArr[index];
  }

  console.log(newArr.join("\n"));

}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
// listOfProducts([['Watermelon', 'Banana', 'Apples']]);