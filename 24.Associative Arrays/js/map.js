function mapExercise() {
  
  // Define
  let map = new Map();

  // Adding Elements
  map.set(1, "one");   // key - 1, value - "one"
  map.set(2, "two");   // key - 2, value - "two"
  map.set(3, "three"); // key - 3, value - "three"
  map.set("four", 4)

  // Accessing Elements
  map.get(3)        // "three"
  map.get("four")   // 4

  // Lenght
  map.size;
  console.log(map.size);  // 4

  // Contains
  map.has("four");  // true
  map.has(3);       // true
  map.has(5);       // false

  // Delete
  map.delete(2);
  console.log(map); // {1 => one, 3 => three, four => 4}

  // Delete the whole content

  //map.clear();   // Map(0) {size: 0}

  // Iterators 
  let entries = Array.from(map.entries());
  // [ [1, 'one'], [3, 'three'], ['four', 4] ]
  
  let keys = Array.from(map.keys());
  //  (3) [1, 3, 'four']

  let values = Array.from(map.values());
  //  (3) ['one', 'three', 4]

  // Console loging:
  for (const [key, value] of map) {
    console.log(key, value);
  }
    // [1, "one"]
    // [3, "three"]
    // ["four", 4]

}
mapExercise();
