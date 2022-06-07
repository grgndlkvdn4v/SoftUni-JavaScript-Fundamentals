function  addAndSubtract(array) {

  let originalSum = 0;
  let resultSum = 0;
  let arrayLength = array.length

  for (let index = 0; index < arrayLength; index++) {
    let element = array[index];

    originalSum += element;
    
    if (element % 2 === 0) {
      element += index;
    } else {
      element -= index;
    }

    array[index] = element;
    resultSum += element
  }

  console.log(array);
  console.log(originalSum);
  console.log(resultSum);

}
addAndSubtract([5, 15, 23, 56, 35]);