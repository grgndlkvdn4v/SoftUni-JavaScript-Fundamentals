function vacation(groupOfPeople, typeOfGroup, dayOfWeek ) {
  let price = 0;

  switch (typeOfGroup) {

    case `Students`:
      switch (dayOfWeek) {
        case `Friday`: price = 8.45; break;
        case `Saturday`: price = 9.80; break;
        case `Sunday`: price = 10.46; break;
      } 
      if (groupOfPeople >= 30) {
        price -= price * 0.15
      }
        break;

    case `Business`:
      switch (dayOfWeek) {
        case `Friday`: price = 10.90; break;
        case `Saturday`: price = 15.60; break;
        case `Sunday`: price = 16; break;
      }
      if (groupOfPeople >= 100) {
        groupOfPeople -= 10;
      }
        break;

    case `Regular`:
      switch (dayOfWeek) {
        case `Friday`: price = 15; break;
        case `Saturday`: price = 20; break;
        case `Sunday`: price = 22.50; break;
      }
      if (groupOfPeople >= 10 && groupOfPeople <= 20) {
        price -= price * 0.05
      }break;

  }

  // if (typeOfGroup === `Students` && groupOfPeople >= 30) {
  //   price -= price * 0.15
  // } else if (typeOfGroup === `Business` && groupOfPeople >= 100) {
  //   groupOfPeople -= 10;
  // } else if (typeOfGroup === `Regular` && (groupOfPeople >= 10 && groupOfPeople <= 10)) {
  //   price -= price * 0.05
  // }

  let totalPrice = groupOfPeople * price;
  console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");