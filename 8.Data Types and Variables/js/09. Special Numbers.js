function specialNumbers(input) {
  
  //цикъл за въртене до даденото число
  for (let i = 1; i <= input; i++) {
    i = i.toString();
    let sum = 0;

    // цикъл за обхождане на числото и сумиране на негвите цифри
    for (let currChar = 0; currChar <i.length; currChar++) {
      sum += Number(i[currChar]);  
    }

    switch (sum) {
      case 5:
      case 7:
      case 11: console.log(`${i} -> True`);
        break;
    
      default: console.log(`${i} -> False`);
        break;
    }
  }

}
specialNumbers(5);
specialNumbers(15);