function factorial(input) {
  
  let fact = 1;

  if (input > 0) {
    fact *= factorial(input);
    input--;
  } else {
    return fact;
  }


}
console.log(factorial(5));