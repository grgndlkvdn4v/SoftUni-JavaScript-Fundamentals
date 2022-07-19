function hardWord(input) {

  let textArr = input[0].split(" ");
  let newArr = [];

  for (let word of textArr) {

    if (word.includes("_")) {

      for (let wordToSwap of input[1]) {

        if ("_".repeat(wordToSwap.length) === word) {
          let index = input[1].indexOf(wordToSwap);
          let matchWord = input[1].splice(index, 1);
          word = matchWord[0];
          // console.log(word);
        } 
        else if (wordToSwap.length + 1 == word.length ) {
          let specialChar;

          if (word[word.length - 1] !== '_') {
            specialChar = word[word.length - 1];
            word.replace(specialChar, "")

            if ("_".repeat(wordToSwap.length) === word) {
              let index = input[1].indexOf(wordToSwap);
              let matchWord = input[1].splice(index, 1);
              word = matchWord[0] + specialChar;
              // console.log(word);
            } 
          }


        }
      }

    }

    newArr.push(word)
  }

  console.log(newArr.join(" "));
}

hardWord([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);