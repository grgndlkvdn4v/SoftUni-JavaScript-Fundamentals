function firstAndLastKNumbers(input) {
  // slice(start, end)
  
  let array = input.slice();
  let k = array.shift();

  let first = array.slice(0, k);
  let last = array.slice(-k, array.length).reverse();

  console.log(first.join(" "));
  console.log(last.join(" "));

}
// firstAndLastKNumbers([2, 7, 8, 9]);
// firstAndLastKNumbers([3, 6, 7, 8, 9]);
firstAndLastKNumbers([4, 0, 1, 2, 3, 4, 5, 6]);