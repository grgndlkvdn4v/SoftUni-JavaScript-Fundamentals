function NxNMatrix(num) {

  let matrix = [];

  for (let columns = 1; columns <= num; columns++) {
    let rowArr = [];

    for (let rows = 1; rows <= num; rows++) {
      rowArr.push(num);
    }
    matrix.push(rowArr.join(" "));
  }

  console.log(matrix.join("\n"));

}
NxNMatrix(3);