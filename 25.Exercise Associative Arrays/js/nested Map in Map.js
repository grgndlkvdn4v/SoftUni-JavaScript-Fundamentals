function test() {

  let mySet = new Set();
  let myMap = new Map();
  let myObj = {};

  mySet.add(1);
  mySet.add(2);
  mySet.add(3);
  mySet.add(3);

  myMap.set("Map + Set", mySet);
  myObj['Obj + Set'] = mySet;

  console.table(myMap);

  console.log(Object.keys(myObj)[0]);
  console.log(Object.values(myObj)[0]);

}
test();
