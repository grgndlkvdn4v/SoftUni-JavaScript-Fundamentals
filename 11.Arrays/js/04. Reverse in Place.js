function solve(arr) {

  for (let i = 0; i < (arr.length - 1) / 2; i++) {
    // let element = arr[i];
    // console.log(element);

    let temp = arr[i];
    arr[i] = arr[arr.length - (1 + i)];
    arr[arr.length - (1 + i)] = temp;
  }

  console.log(arr.join(" "));

}
solve (['a', 'b', 'c', 'd', 'e']);
console.log("=========");
solve (['33', '123', '0', 'dd']);