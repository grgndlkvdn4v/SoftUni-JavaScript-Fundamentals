function numbers(input) {

  let average = 0
  let sum = input
    .split(" ")
    .map(Number)
    .map(el => average = average + el);
  
  average = average / array.length;
  console.log(average);

  array = array.filter(el => el > average);

  array.sort((a, b) => b - a)

  console.log(array);
  


}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');