function partyTime(input) {

  let list = {};

  let index = 0;
  while (input[index] !== "PARTY") {
    let currGuest = input[index++];

    let guestType;
    if (currGuest.charAt(0) >= 0 && currGuest.charAt(0) <= 9) {
      guestType = "VIP";
    }
    else {
      guestType = "regular";
    }
    list[currGuest] = guestType;
  }

  // оставям само гостите, които не са дошли
  let notComingList = JSON.parse(JSON.stringify(list));

  for (index++; index < input.length; index++) {
    guestComing = input[index];
    delete notComingList[guestComing];
  }

  // проверявам тези, които не са дошли дали фигурират в  списъка.
  for (const key in notComingList) {
    let isOnList = false;
    for (const guest in list) {
      if (guest === key) {
        isOnList = true;
      }
    }
    if (!isOnList) {
      delete notComingList[key];
    }
  }



  let entries = Object.entries(notComingList);
  let sortedList = entries.sort( ([keyA, valueA], [keyB, valueB]) =>
    (valueA) - (valueB)
  );

  console.log(sortedList.length);
  // console.log(VIPguestsCounter);
  for (const [k, v] of sortedList) {
    console.log(k);
  }

}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "dbusan"
]);

// partyTime([
//   "m8rfQBvl",
//   "fc1oZCE0",
//   "UgffRkOn",
//   "7ugX7bm0",
//   "9CQBGUeJ",
//   "2FQZT3uC",
//   "dziNz78I",
//   "mdSGyQCJ",
//   "LjcVpmDL",
//   "fPXNHpm1",
//   "HTTbwRmM",
//   "B5yTkMQi",
//   "8N0FThqG",
//   "xys2FYzn",
//   "MDzcM9ZK",
//   "PARTY",
//   "2FQZT3uC",
//   "dziNz78I",
//   "mdSGyQCJ",
//   "LjcVpmDL",
//   "fPXNHpm1",
//   "HTTbwRmM",
//   "B5yTkMQi",
//   "8N0FThqG",
//   "m8rfQBvl",
//   "fc1oZCE0",
//   "UgffRkOn",
//   "7ugX7bm0",
//   "9CQBGUeJ",
// ]);