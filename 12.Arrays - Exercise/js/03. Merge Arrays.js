function mergeArrays(firstArr, secondArr) {
  let resultArr = [];

  for (let index = 0; index < firstArr.length; index++) {

    let newElem;

    if (index % 2 !== 0) {
      newElem = firstArr[index] + secondArr[index] + "";
    } else {
      newElem = Number(firstArr[index]) + Number(secondArr[index]);
    }

    resultArr.push(newElem);
  }

  console.log(resultArr.join(" - "));

}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
mergeArrays(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);