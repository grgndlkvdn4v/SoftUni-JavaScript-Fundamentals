{ // =========  test(string)  =========
  // Determines whether there is a match

  let text = 'Today is 2015-05-11';
  let regEx = /\d{4}-\d{2}-\d{2}/g;

  let containsValidDate = regEx.test(text);
  console.log(containsValidDate); // true
}

{ // =========  match(regexp)  =========
  // Returns an array of all matches (strings)

  let text = 'Peter: 123 Mark: 456';
  let regEx = /([A-Z][a-z]+): (\d+)/g;
  let matches = text.match(regEx);

  console.log(matches.length);  // 2
  console.log(matches[0]);      // Peter: 123
  console.log(matches[1]);      // Mark: 456
}

{ // =========  exec(string, text)  =========
  // Works with a pointer & returns the groups

  let text = 'Peter: 123 Mark: 456';
  let regEx = /([A-Z][a-z]+): (\d+)/g;
  
  let firstMatch = regEx.exec(text);
  let secondMatch = regEx.exec('Peter: 123 Mark: 456');

  console.log(firstMatch[0]) // Peter: 123 
  console.log(firstMatch[1]); // Peter
  console.log(firstMatch[2]); // 123

}