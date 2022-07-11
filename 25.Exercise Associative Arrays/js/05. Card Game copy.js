function cardGame(input) {
  let players = {};
  
  for (const iterator of input) {
    let[name, drawnCards] = iterator.split(": ");
    drawnCards = drawnCards.split(", ");

    if (!players.hasOwnProperty(name)) {
      players[name] = new Set();
    }

    for (const card of drawnCards) {
      players[name].add(card);
    }
  }

  console.table(players);
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);