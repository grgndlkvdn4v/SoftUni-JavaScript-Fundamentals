function repeatString(string, n) {

  let result = "";

  for (let i = 1; i <= n; i++) {
    result += string;
  }

  return result;

}
// let printLine = repeatString("abc", 3);
// console.log(printLine);
console.log(repeatString("abc", 3));