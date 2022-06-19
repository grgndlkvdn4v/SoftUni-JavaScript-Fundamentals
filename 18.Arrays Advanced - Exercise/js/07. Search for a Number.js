function searchForANumber(inputArr, secondArr) {

  let resultArr = inputArr.slice();

  let takeCount = secondArr[0];
  let deleteCount = secondArr[1];
  let searchNum = secondArr[2];

  // resultArr = resultArr.slice(0, takeCount).splice(deleteCount).filter( x => searchNum === x );
  
  resultArr = resultArr.slice(0, takeCount);

  resultArr = resultArr.splice(deleteCount);

  resultArr = resultArr.filter( x => searchNum === x )

  console.log(`Number ${searchNum} occurs ${resultArr.length} times.`);

}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);