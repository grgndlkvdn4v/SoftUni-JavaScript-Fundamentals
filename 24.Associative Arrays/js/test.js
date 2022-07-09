function deleteFunc() {
  let assocArr = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five:5
  }

  delete assocArr["two"];
  delete assocArr.five;

  
}
deleteFunc();