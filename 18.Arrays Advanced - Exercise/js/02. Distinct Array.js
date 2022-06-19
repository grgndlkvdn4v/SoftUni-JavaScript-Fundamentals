function distinctArray(inputArr) {
  let newArr = [];

  for (let el of inputArr) {
    if (!newArr.includes(el)) {
      newArr.push(el)
    }
  }
  console.log(newArr.join(" "));

}
distinctArray([8, 9, 7, 2, 3, 4, 1, 2]);