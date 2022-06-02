function reverseAnArrayOfNumbers(num, array) {

  let newArray = [];

  for (let index = num - 1; index >= 0; index--) {
    const newElement = array[index];
    newArray.push(newElement);
  }

  console.log(newArray.join(" "));

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
// reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
// reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);