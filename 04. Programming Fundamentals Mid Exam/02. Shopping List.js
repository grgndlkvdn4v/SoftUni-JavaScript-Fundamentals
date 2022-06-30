function shoppingList(input) {
  let list = input.shift().split("!");
  // console.log(list);

  let command = input.shift();
  while (command !== "Go Shopping!") {
    let [action, item, newItem] = command.split(" ");

    switch (action) {

      case "Urgent":
        if ( ! list.includes(item) ) {
          list.unshift(item);
        }
        break;

      case "Unnecessary":

        if (list.includes(item) ) {
          let index = list.indexOf(item);
          list.splice(index, 1)
        }

        break;

      case "Correct":

        if (list.includes(item) ) {
          let index = list.indexOf(item);
          list.splice(index, 1, newItem);
        }

        break;

      case "Rearrange":

        if (list.includes(item) ) {
          let index = list.indexOf(item);
          let rearrange = list.splice(index, 1);
          list.push(rearrange[0]);

        }

        break;

    }
    
    command = input.shift();
  }

console.log(list.join(", "));

}
// shoppingList([
//   "Tomatoes!Potatoes!Bread!Honey!Icecream",

//   "Correct Potatoes Yogurt",
//   "Correct Tomatoes Cucumbers",
//   "Correct Zuchinni Cucumbers",
//   "Rearrange Bread",
//   "Rearrange sperma",

//   "Go Shopping!",
// ]);
shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);