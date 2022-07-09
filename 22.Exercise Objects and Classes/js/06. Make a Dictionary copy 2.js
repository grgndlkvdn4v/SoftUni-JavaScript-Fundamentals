function makeADictionary(input) {

  let newArr = [];
  let termsArr = [];

  for (let iterator of input) {
    let definition = JSON.parse(iterator);
    let term = Object.keys(definition)[0];
    let description = Object.values(definition);

    // console.log(term);

    // цикъл за проверка дали "term" съшествува в новият масив
    let isFound = false;
    for (let i of newArr) {
      let checkDefinition = JSON.parse(i)
      let checkTerm = Object.keys(checkDefinition)[0]
      console.log(checkTerm);

      if (term === checkTerm) {
        isFound = true;
        console.log("isFound !!!");
        let index = newArr.indexOf(iterator);
        newArr.splice(index, 1, iterator);
      }
    }

    if (!isFound) {
      newArr.push(definition)
    }


  }

  // newArr.map(el => console.log(el));
  // newArr.sort((a, b) => a.localeCompare(b));
}
makeADictionary([
  // '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

  // '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

  // '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

  // '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',

  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);

