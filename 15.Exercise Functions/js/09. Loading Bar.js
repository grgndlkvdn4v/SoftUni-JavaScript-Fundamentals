function loadingBar(input) {

  if (input === 100) {
    console.log("100% Complete!");
  } else {

    let num = input / 10;

    let complete = "%".repeat(num);
    let incomplete = ".".repeat(10 - num);

    console.log(`${input}% [${complete}${incomplete}]`);
    console.log("Still loading...");
  }
}
loadingBar(50);
// loadingBar(100);