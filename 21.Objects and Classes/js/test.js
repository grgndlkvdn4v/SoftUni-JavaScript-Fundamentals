function test(obj) {
  
  let arr = [];
  let arrCopy = arr;

  for (let i = 1; i <= 5; i++) {
    arrCopy.push(i)
  }

  console.log(arr);
  console.log(arrCopy);

}
test();