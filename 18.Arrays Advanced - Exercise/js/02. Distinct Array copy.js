function distinctArray(inputArr) {

  let newArr = inputArr.filter(function(x) {
    if (!newArr.includes(x))
      return x;
  });
  
  console.log(newArr);
}
distinctArray([8, 9, 7, 2, 3, 4, 1, 2]);