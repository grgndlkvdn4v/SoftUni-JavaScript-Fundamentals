function matchFullName(input) {
  let regexp = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

  let matches = input.match(regexp);
  console.log(matches.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");