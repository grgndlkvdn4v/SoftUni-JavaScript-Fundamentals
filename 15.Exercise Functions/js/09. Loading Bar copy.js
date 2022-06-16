function loadingBar(num) {

  if (num === 100) {
    console.log("100% Complete!");
  } 
  else {
    let printArray = [];
    printArray.push(`${num}%`);
    printArray.push(bar(num));

    console.log(printArray.join(" "));
    console.log("Still loading...");
  }


  function bar(num) {
    let barArr = ["["];

    for (let index = 1; index <= 10; index++) {
      
      if (index <= num / 10) {
        barArr.push("%");
      } else {
        barArr.push(".");
      }
    }

    barArr.push("]");
    return(barArr.join(""));
  }

}
loadingBar(50);
loadingBar(100);