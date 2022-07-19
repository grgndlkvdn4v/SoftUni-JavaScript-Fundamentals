function cutAndReverse(input) {
  let middle = (input.length) / 2;
  let textArr = input.split("").reverse();

  let arr = [];
  for (let i = middle; i < textArr.length ; i++) {
    const symbol = textArr[i];
    arr.push(symbol);
  }
  console.log(arr.join(""));

  arr = [];
  for (let i = 0; i < middle; i++) {
    const symbol = textArr[i];
    arr.push(symbol);
  }
  console.log(arr.join(""));

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');