function commonElements(fArr, sArr) {

    for (const iterator of fArr) {

    if(sArr.includes(iterator)) {
      console.log(iterator);
    }
  }
  
}
commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
// commonElements(
//   ["S", "o", "f", "t", "U", "n", "i", " "],
//   ["s", "o", "c", "i", "a", "l"]
// );

