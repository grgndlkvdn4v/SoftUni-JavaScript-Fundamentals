function sorting(inputArr) {

  let resultArr = [];

  inputArr = inputArr.sort(function(a,b) {
    return a - b;
  });


  while (inputArr.length > 0) {

    let pair = [];

    let biggest = inputArr.pop();
    pair.push(biggest);

    let smallest = inputArr.shift();
    pair.push(smallest);

    resultArr += pair.join(" ") + " ";

  }

  console.log(resultArr);

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
// sorting([1,5,3,4,2,7,6,8,9,10]);