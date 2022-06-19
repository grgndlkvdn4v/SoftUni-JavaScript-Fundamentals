function sortAnArrayByTwoCriteria(inputArr) {

  inputArr.sort(function(a, b) {
      return (a.length - b.length) || (a.localeCompare(b))
      // return a.localeCompare(b);
  })

  console.log(inputArr.join("\n"));
}
// sortAnArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortAnArrayByTwoCriteria(["alpha", "beta", "gamma", "BA"]);