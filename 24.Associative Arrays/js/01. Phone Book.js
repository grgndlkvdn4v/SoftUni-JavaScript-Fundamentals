function phoneBook(input) {

  let phoneBookObj = {};

  for (let iterator of input) {
    let [name, number] = iterator.split(" ");
    phoneBookObj[name] = number;
  }

  for (const key in phoneBookObj) {
    const value = phoneBookObj[key];
    console.log(key + " -> " + value);
  }
  
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
console.log("");
phoneBook([
  "George 0552554", 
  "Peter 087587", 
  "George 0453112", 
  "Bill 0845344"
]);