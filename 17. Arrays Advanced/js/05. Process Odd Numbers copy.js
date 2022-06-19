function processOddNumbers(input) {

  let resArr = input
                    .filter( (el, i) => i % 2 !== 0 ) 
                    .map(el => el * 2)
                    .reverse()
                    .join(" ");

  console.log(resArr);

}
processOddNumbers([10, 15, 20, 25]);
// processOddNumbers([3, 0, 10, 4, 7, 3]);