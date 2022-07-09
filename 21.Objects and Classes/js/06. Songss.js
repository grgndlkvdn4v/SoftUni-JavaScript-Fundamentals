function songs(input) {

  let songsArr = [];
  let iterations = input.shift();
  let inputTypeList = input.pop();

  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }

    songAdd() {
      songsArr.push(this.name)
    }
  }

  for (let i = 0; i < iterations; i++) {
    let [typeList, name, time] = input[i].split("_");

    if (inputTypeList === "all" || inputTypeList === typeList ) {
          let song = new Song(typeList, name, time)
          song.songAdd();
    }
    
  }

  console.log(songsArr.join("\n"));
}

songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);

// songs([
//   4,
//   "favourite_DownTown_3:14",
//   "listenLater_Andalouse_3:24",
//   "favourite_In To The Night_3:58",
//   "favourite_Live It Up_3:48",
//   "listenLater",
// ]);