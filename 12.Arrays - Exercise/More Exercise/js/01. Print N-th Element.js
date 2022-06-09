function printNElement(array) {
  
  let step = array[array.length - 1];
  step = Number(step);

  let resStr = [];

  for (let index = 0; index < array.length - 1; index += step) {
    const element = array[index];
    resStr.push(element);
  }

  console.log(resStr.join(" "));

}
printNElement(['5', '20', '31', '4', '20', '2']);
// printNElement(['dsa', 'asd', 'test', 'test', '2']);