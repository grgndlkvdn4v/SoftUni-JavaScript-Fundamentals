function lastKNumbersSequance(n, k) {
  // slice(start, end)
  
  let result = [1];

  for (let index = 0; index < n - 1; index++) {
    let currSequence = result.slice(-k);
    
    let sum = 0;
    for (const el of currSequence) {
      sum += el;
    }

    result.push(sum);
  }
  console.log( result.join(" ") );

}
lastKNumbersSequance(6, 3);