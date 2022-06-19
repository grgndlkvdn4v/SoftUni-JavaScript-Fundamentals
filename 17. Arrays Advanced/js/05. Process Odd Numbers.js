function processOddNumbers(input) {
  
  let oddsArr = input.filter( (el, i) => i % 2 !== 0 );
  let doubleArr = oddsArr.map( (el) => el * 2 );
  let reversedArr = doubleArr.reverse();

  console.log(reversedArr.join(" "));
}
processOddNumbers([10, 15, 20, 25]);
// processOddNumbers([3, 0, 10, 4, 7, 3]);