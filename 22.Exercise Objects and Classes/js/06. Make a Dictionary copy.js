function makeADictionary(input) {

  class Dictionary {
    constructor(term, description){
      this.term = term;
      this.description = description;
    }

    hui() {

    }
  }

  let newArr = [];

  for (let iterator of input) {
    let pair = JSON.parse(iterator);
    let term = Object.keys(pair)[0];
    let description = Object.values(pair)[0];

    // Проверка за съвпадащи "terms"
    let checkArr = Object.keys(newArr);
    // console.log(checkArr);

    // if (checkArr.includes(term)) {
    //   console.log(term);
    // } else {
    //   console.log(`${term} not included`);
    // }

    let obj = {};
    obj.term = term;
    obj.description = description;

    newArr.push(obj);

  }


  console.log(Object.values(newArr[0]));

}
makeADictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',

  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);

