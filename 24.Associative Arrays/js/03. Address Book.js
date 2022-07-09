function addressBook(input) {
  let assocArr = {};
  
  for (const token of input) {
    let [name, adress] = token.split(":");

    assocArr[name] = adress;
  }

  let entries = Object.entries(assocArr);
  let sortEntries = entries.sort( ([keyA], [keyB]) => { // деструктурирам масива дирекно в подаването на параметри като по този начин се вземат само елементите на нулев индекс.
    // let keyA = a[0];
    // let keyB = b[0];
    return keyA.localeCompare(keyB)
  } );

  for (const [name, adress] of sortEntries) {
    // let name = iterator[0];
    // let adress = iterator[1];
    console.log(`${name} -> ${adress}`);
  }
  
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);