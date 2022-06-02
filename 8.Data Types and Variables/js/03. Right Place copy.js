function rightPlace(firstStr, char, secondStr) {

  let newStr = firstStr.replace("_", char);
  let output = newStr === secondStr ? "Matched" : "Not Matched";
  
  console.log(output);

}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');