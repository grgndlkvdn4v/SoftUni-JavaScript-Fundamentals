function cardGame(input) {
  let players = new Map();
  
  for (const iterator of input) {
    let[name, drawnCards] = iterator.split(": ");
    drawnCards = drawnCards.split(", ");

    if (!players.has(name)) {
      players.set( name, new Set() );
    }

    for (let card of drawnCards) {
      players.get(name).add(card)
    }
  }

  let J = 11; Q = 12; K = 13; A = 14; // Power
  let S = 4; H = 3; D = 2; C = 1;     // Types

  let entries = Array.from(players.entries());

  for (const [player, cards] of entries) {
    let sum = 0;

    for (const card of cards) {
      let type = card[card.length - 1];
      let power = card.replace(type, "");

      switch (power) {
        case "J": power = J; break;
        case "Q": power = Q; break;
        case "K": power = K; break;
        case "A": power = A; break;
      }
      power = Number(power);

      switch (type) {
        case "S": type = S; break;
        case "H": type = H; break;
        case "D": type = D; break;
        case "C": type = C; break;
      }
      
      sum += power * type
    }
    
    console.log(player + ": " + sum);
  }

}

cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);