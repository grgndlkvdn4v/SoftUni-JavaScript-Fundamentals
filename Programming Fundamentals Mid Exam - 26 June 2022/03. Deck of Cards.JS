function deckOfCards(input) {

  let deck = input.shift().split(", ");
  let n = Number(input.shift());

  for (let i = 1; i <= n; i++) {
    let commandLine = input.shift().split(", ");
    let [command, index, cardName] = commandLine

    switch (commandLine[0]) {

      case "Add":
        // console.log(commandLine);
        [command, index, cardName] = [command, cardName, index];

        if (deck.includes(cardName)) {
          console.log("Card is already in the deck");
        } 
        else {
          deck.push(cardName);
          console.log("Card successfully added");
        }
        break;

      case "Remove":
        // console.log(commandLine);
        [command, index, cardName] = [command, cardName, index];
        index = deck.indexOf(cardName);

        if (index !== -1) {
          deck.splice(index, 1);
          console.log("Card successfully removed");
        } 
        else {
          console.log("Card not found");
        }
        break;

      case "Remove At":
        // console.log(commandLine);
        index = Number(index);

        if (index >= 0 && index <= deck.length - 1) {
          deck.splice(index, 1);
          console.log("Card successfully removed");
        } else {
          console.log("Index out of range");
        }
        break;

      case "Insert":
        // console.log(commandLine);
        index = Number(index);

        if (index >= 0 && index <= deck.length - 1) {
          
          if (deck.includes(cardName)) {
            console.log("Card is already added");
          } 
          else {
            deck.splice(index, 0, cardName)
            console.log("Card successfully added");
          }

        }
        else {
          console.log("Index out of range");
        }

        break;

    }
    
  }
  

  console.log(deck.join(", "));
}

// deckOfCards([
//   "Ace of Diamonds, Queen of Hearts, King of Clubs",
//   "3",
//   "Add, King of Diamonds",
//   "Insert, 2, Jack of Spades",
//   "Remove, Ace of Diamonds",
// ]);

// deckOfCards([
//   "Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
//   "2",
//   "Add, Two of Clubs",
//   "Remove, Five of Hearts",
// ]);

deckOfCards([
  "Jack of Spades, Ace of Clubs, Jack of Clubs",
  "2",
  "Insert, -1, Queen of Spades",
  "Remove At, 1",
]);