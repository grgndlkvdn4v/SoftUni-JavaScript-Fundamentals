function commonElements(fArr, sArr) {

  for (let fIndex = 0; fIndex < fArr.length; fIndex++) {

    for (let sIndex = 0; sIndex < sArr.length; sIndex++) {

      if (fArr[fIndex] === sArr[sIndex]) {
        console.log(fArr[fIndex]);
      }
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

