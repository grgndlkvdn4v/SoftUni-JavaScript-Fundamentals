  function palindromeIntegers(input) {

  let inputArray = input;

  for (const curNum of inputArray) {

    let straight = curNum.toString();
    let reversed = ( (straight.split("")).reverse().join("") )
    
    if (straight === reversed) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

}
palindromeIntegers([121, 1234]);
// palindromeIntegers([123,323,421,121]);
// palindromeIntegers([32,2,232,1010]);