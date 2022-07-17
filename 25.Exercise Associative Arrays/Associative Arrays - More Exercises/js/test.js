function test(input) {
  let sequence = [];
  
  for (let i = 1; i <= input; i++) {

    num = sequence[(sequence.length - 2)] + sequence[(sequence.length - 1)];
    if (Number.isNaN(num)) {
      num = 1;
    }
    sequence.push(num);
  }

  console.log(sequence);
}
test(10);
