function oddOccurrences(input) {
  occurrencesObj = {};
  let inputArr = input.split(" ");
  
  while (inputArr.length !== 0) {
    let el = inputArr.shift().toLowerCase();

    if (!occurrencesObj.hasOwnProperty(el.toLowerCase())) {
      occurrencesObj[el] = 1;
      // for (let checkEl of inputArr) {
      //   checkEl = checkEl.toLowerCase();
      //   if (el === checkEl) {
      //     occurrencesObj[el]++;
      //   }
      // }
    } else {
      occurrencesObj[el]++;
    }
  }
  
  let printLine = "";
  Object.entries(occurrencesObj).forEach( function([key, value]) {
    if (value % 2 !== 0)
      printLine += key + " ";
  } );

  // for (const key in occurrencesObj) {
  //   if (occurrencesObj[key] % 2 !== 0) {
  //     printLine += key + " ";
  //   }
  // }

  console.log(printLine.trim());
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
// oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');