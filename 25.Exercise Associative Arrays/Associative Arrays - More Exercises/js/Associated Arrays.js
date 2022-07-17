function declaration() { //=============================

  let keyName = 'five';

  let assocArr = {
    one: 1,
    two: 2,
    'three': 3,
    'four': 4,
    [keyName]: 5
  }
  
  console.log(assocArr.five);
  console.log(assocArr['five']);
  console.log(assocArr[keyName]);
  
  for (const key in assocArr) {
    // key   -> key
    // value -> assocArr[key]
    console.log(key + " => " + assocArr[key]);
  }
  
  console.table(assocArr)

}
// declaration();


function sorting() { //=============================

  let assocArr = {
    one: "Abstract",
    five: "Forgive",
    three: "Culture",
    four: "Zebra",
    two: "Legs"
  }

  let entries = Object.entries(assocArr);
  // console.log(entries);  // [Array(2), .... , Array(2)] 
  let sortedEntries = entries.sort( (a, b) => 
    a[1].localeCompare(b[1])
    );

  console.table(sortedEntries);
} 
// sorting();


function deleteFunc() { //=============================
  let assocArr = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five:5
  }

  delete assocArr["two"];
  delete assocArr.five;

  for (const [day, num] of Object.entries(assocArr)) {
    console.log(day, num);
  }

}
// deleteFunc();