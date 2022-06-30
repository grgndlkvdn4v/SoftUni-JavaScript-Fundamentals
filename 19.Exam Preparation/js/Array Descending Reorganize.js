function test(input) {
  
  let arrayOfNums = input.slice();
  let reorderedNumsArr = [];

  arrayReorganize();

  function arrayReorganize() {

    while (arrayOfNums.length > 0) {
      let min = Number.MAX_SAFE_INTEGER;
      
      for (let currNum of arrayOfNums) {
        
        if (currNum < min)
          min = currNum;
  
      }
  
      reorderedNumsArr.push(min);
      arrayOfNums.splice(arrayOfNums.indexOf(min),1)
    }

    console.log(reorderedNumsArr);
  }
  
}
test([1,3,5,2,6,7,10]);