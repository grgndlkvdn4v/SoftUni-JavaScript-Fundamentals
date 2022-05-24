function reverseString(str) {

  let newStr = ``;

  for (let index = str.length - 1; index >= 0; index--) {
    newStr += str[index];
  }

  console.log(newStr);

}
reverseString(`Hello`);
// reverseString(`SoftUni`);
// reverseString(1234);