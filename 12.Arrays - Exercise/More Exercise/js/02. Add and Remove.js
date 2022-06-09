function addAndRemove(array) {

  let newArr = [];

  for (let index = 0; index < array.length; index++) {
    const command = array[index];

    switch (command) {
      case `add`: newArr.push(index + 1); break;
      case `remove`: newArr.pop(); break;
    }
  }

    newArr.length <= 0 ?
    console.log(`Empty`) :
    console.log(newArr.join(" "));

}
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);