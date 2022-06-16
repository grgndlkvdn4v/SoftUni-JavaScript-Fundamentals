function NxNMatrix(num) {
  
  for (let column = 1; column <= num; column++) {
    let printRow = "";
    for (let rows = 1; rows <= num; rows++) {
      printRow += num + " ";
    }
    console.log(printRow);
  }

}
NxNMatrix(3);