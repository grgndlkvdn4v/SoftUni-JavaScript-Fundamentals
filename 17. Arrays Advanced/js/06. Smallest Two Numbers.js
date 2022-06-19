function smallestTwoNumbers(array) {
  
  array.sort( (a,b) => a - b ); // от малко към голямо
  array = array.slice(0, 2);
  array = array.join(" ");

  console.log(array);

}
smallestTwoNumbers([30, 15, 50, 5]);
// smallestTwoNumbers([3, 0, 10, 4, 7, 3]);