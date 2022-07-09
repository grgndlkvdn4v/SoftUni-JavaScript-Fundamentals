function towns(input) {

  // class Town {
  //   constructor (town, latitude, longitude) {
  //     this.town = town;
  //     this.latitude = Number(latitude).toFixed(2);
  //     this.longitude = Number(longitude).toFixed(2);
  //   }

  //   // printLine() {

  //   //   console.log(JSON.stringify(Town));

  //     // console.log(`town: ${this.town}, latitude: ${this.latitude}, longitude: ${this.longitude}`);
  //   // }
  // }


  while (input.length > 0) {
    let [town, latitude, longitude] = input.shift().split(" | ");

    let townObj = {
      town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2)}
    console.log(townObj);
  }

}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);