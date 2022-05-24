function SumOfOddNumbers(num) {

  let sum = 0;
  let counter = 0;

  for (let i = 1; counter < num; i+=2) {
    console.log(i);
    sum += i;
    counter++;
  } 
  console.log(`Sum: ${sum}`); 
}

SumOfOddNumbers(5);
// SumOfOddNumbers(3);