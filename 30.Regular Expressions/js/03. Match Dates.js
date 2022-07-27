function matchDates(input) {

  let pattern = /(?<day>\d{2})(?<separator>[.\-/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g;

  let matches = pattern.exec(input[0]);

  while (matches !== null) {
    let day = matches.groups['day'];
    let month = matches.groups['month'];
    let year = matches.groups['year'];
    
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    matches = pattern.exec(input[0]);
  }

}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);