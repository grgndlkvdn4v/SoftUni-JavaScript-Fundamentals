function movies(input) {
  let moviesArr = [];

  for (const command of input) {

    if (command.includes("addMovie")) {
      let movieName = command.replace("addMovie ", "");
      moviesArr.push({name: movieName})
    }

    else if (command.includes("directedBy")) {
      let [movieName, director] = command.split(" directedBy ");

      moviesArr.forEach(el => {
        if (el.name === movieName) {
          el.director = director
        }
      } );
    }

    else if (command.includes("onDate")) {
      let [movieName, date] = command.split(" onDate ");

      moviesArr.forEach(el => {
        if (el.name === movieName) {
          el.date = date
        }
      });
    }
    
  }


  for (const el of moviesArr) {
    if (el.name && el.director && el.date) {
      console.log(JSON.stringify(el));
    }
  }

}
movies([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);

// movies([
//   "addMovie The Avengers",
//   "addMovie Captain America",
//   "The Avengers directedBy Anthony Russo",
//   "The Avengers onDate 30.07.2010",
//   "Captain America onDate 30.07.2010",
//   "Captain America directedBy Joe Russo",
// ]);