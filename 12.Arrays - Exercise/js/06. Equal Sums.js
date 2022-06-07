function equalSums(array) {

  let areSumsEqual = false;

  for (let index = 0; index < array.length; index++) {

    let leftSum = 0;
    let rightSum = 0;

    // Обхождане лявата страна на масива
    for (let leftIndex = 0; leftIndex < index; leftIndex++) {
      let currDigitLeft = array[leftIndex];
      leftSum += currDigitLeft;
    }

    // Обхождане дясната страна на масива
    for (let rightIndex = index + 1; rightIndex < array.length; rightIndex++) {
      let currDigitRight = array[rightIndex];
      rightSum += currDigitRight;
    }

    if (leftSum === rightSum) {
      areSumsEqual = true;
      console.log(index);
    }
  }

  if(!areSumsEqual)
  console.log("no");

}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
// equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);