function addressBook(input) {
  let assocArr = {};
  
  for (const token of input) {
    let [name, adress] = token.split(":");

    assocArr[name] = adress;
  }

  let keys = Object.keys(assocArr);
  let sortedkeys = keys.sort( (a, b) =>
    a.localeCompare(b)
  );

  for (const key of sortedkeys) {
    console.log(`${key} -> ${assocArr[key]}`);
  }
  
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);