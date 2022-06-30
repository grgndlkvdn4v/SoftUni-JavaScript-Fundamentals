function numbers(input) {
  input = input.split(" ").map(Number);

  let average = 0;
  let sum = input.map(el => average += el);
  average = average / input.length ;

  let greaterThanAvarage = input  .filter(el => el > average)
                                  .sort((a,b) => b - a)
                                  .slice(0, 5);

  (greaterThanAvarage.length > 0) ? console.log(greaterThanAvarage.join(" ")) : 
                                    console.log("No");
}
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');