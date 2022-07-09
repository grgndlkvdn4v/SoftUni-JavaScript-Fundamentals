function storage(input) {
  let map = new Map();
  
  for (let iterator of input) {
    let [item, quantity] = iterator.split(" ");

    if (!map.has(item)) {
      map.set(item, +quantity);
    } 
    else {
      let oldQuantity = map.get(item);
      let newQuantity = +quantity + oldQuantity;
      map.set(item, newQuantity );
    }
  }

  for (const [item, quantity] of map) {
    console.log(item + " -> " + quantity);
  }

}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);