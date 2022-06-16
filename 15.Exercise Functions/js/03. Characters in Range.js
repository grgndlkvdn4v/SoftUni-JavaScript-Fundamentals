function charactersInRange(symbolOne, symbolTwo) {

  let print = "";

  let start = Math.min(
      symbolOne.charCodeAt(0), 
      symbolTwo.charCodeAt(0) );

  let end = Math.max(
      symbolOne.charCodeAt(0), 
      symbolTwo.charCodeAt(0) );

  for (let char = start + 1; char <= end - 1; char++) {
    const currChar = String.fromCharCode(char)
    print += currChar + " ";
  }

  console.log(print);

}
charactersInRange("a", "d");
charactersInRange("C", "#");