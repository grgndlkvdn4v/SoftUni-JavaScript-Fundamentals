function arrayRotation(array, rotations) {

  for (let index = 0; index < rotations; index++) {
    const element = array[0];

    array.push(element);
    array.shift();
  }

  console.log(array.join(" "));

}
arrayRotation([51, 47, 32, 61, 21], 2);
// arrayRotation([32, 21, 61, 1], 4);
// arrayRotation([2, 4, 15, 31], 5);