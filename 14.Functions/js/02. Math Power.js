function mathPower(num, pow) {
  
  // let result = Math.pow(num, pow);
  // console.log(result);

  let sum = 1;
  for (let i = 1; i <= pow; i++) {
    sum *= num;
  }
  console.log(sum);

}
mathPower(2, 8);
mathPower(3, 4); // 81