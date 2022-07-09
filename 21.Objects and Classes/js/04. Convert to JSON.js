function convertToJSON(name, lastName, hairColor) {
  
  let obj = {
    lastName,
    hairColor,
    name 
  };

  let str = JSON.stringify(obj)

  console.log(typeof str);
  console.log(typeof obj);
}
convertToJSON('George', 'Jones', 'Brown');