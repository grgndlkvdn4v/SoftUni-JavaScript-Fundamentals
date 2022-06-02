function condenseArrayToNumber(array) {

  while (array.length > 1) {
    
    for (let index = 0; index < array.length - 1; index++) {
      const newElement = array[index] + array[index + 1];
      array[index] = newElement;
      // console.log(array);
    }
    array.pop()

  }

  console.log(array[0]);
  
}
// condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([5,0,4,1,2]);
// condenseArrayToNumber([1]);
