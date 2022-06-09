function nonDecreasingSubset(array) {

  for (let index = 0; index < array.length - 1;) {
    const currDigit = array[index];
    let nextDigit = array[index + 1];

    if (nextDigit >= currDigit) {
      index++;
    } else {
      array.splice(index + 1, 1)
    }
  }

  console.log(array.join(" "));

}
nonDecreasingSubset([ 1, 3, 8, 8, 4, 10, 12, 3, 2, 24]);