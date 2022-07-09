function meetings(input) {

  let meetingsObj = {};

  for (let iterator of input) {
    let [day, name] = iterator.split(" ");

    if (meetingsObj.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      console.log(`Scheduled for ${day}`);
      meetingsObj[day] = name;
    }

  }

  for (const key in meetingsObj) {
    const value = meetingsObj[key];
    console.log(key + " -> " + value);  
  }

}
// meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);

meetings([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);