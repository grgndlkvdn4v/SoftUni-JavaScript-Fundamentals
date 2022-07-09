function towns(input) {

  for (const iterator of input) {

    let [town, latitude, longitude] = iterator.split(" | ");

    let townObj = {
      town,
      latitude: (+latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2)
    }

    console.log(townObj);
  }

}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);