function city(obj) {

  for (const key of Object.keys(obj)) {
    console.log(`${key} -> ${obj[key]}`);
  }

  // for (const key of Object.entries(obj)) {
  //   console.log(`${key[0]} -> ${key[1]}`);
  // }

}
city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});