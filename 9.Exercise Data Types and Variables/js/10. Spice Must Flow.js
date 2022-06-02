function spiceMustFlow(startingYield) {

  let workersConsumation = 26;
  let yieldDaylyDrop = startingYield;
  
  let currentYield = 0;
  let daysCounter = 0;

  while (yieldDaylyDrop >= 100) {

    currentYield += yieldDaylyDrop;
    currentYield -= workersConsumation;

    daysCounter++;
    yieldDaylyDrop -= 10;
  }

  console.log(daysCounter);

  if (daysCounter !== 0) {
    console.log(currentYield - 26);
  } else {
    console.log(currentYield);
  }

}
// spiceMustFlow(111);
spiceMustFlow(450);