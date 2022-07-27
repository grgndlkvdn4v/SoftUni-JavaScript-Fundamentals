function test() {
  let message = '123456789'
  let index = 4;
  let add = 'add'
  
  let leftSide = message.slice(0, index);
  let rightSide = message.slice(index);
  console.log(leftSide, message, rightSide);

  let result = leftSide.concat(add.concat(rightSide));
  console.log(result); 

}
test();