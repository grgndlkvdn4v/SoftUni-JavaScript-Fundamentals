function makeADictionary(input) {

  let dictionaryObj = {};

  for (let iterator of input) {

    iterator = JSON.parse(iterator);
    let term = Object.keys(iterator)[0];
    let description = Object.values(iterator)[0];

    // console.log(term + " | " + description);
    dictionaryObj[term] = description;
  }

  let arr = Object.entries(dictionaryObj)
  arr.sort( (a, b) => a[0].localeCompare(b[0]) )
  
  for (const iterator of arr) {
    let term = iterator[0];
    let definition = iterator[1]
    console.log(`Term: ${term} => Definition: ${definition}`);
  }

  // for (const key in dictionaryObj) {
  //   console.log(`Term: ${key} => Definition: ${dictionaryObj[key]}`);
  // }

}
makeADictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',

  '{"Microphone":"Golqqqqm hui."}'
]);

