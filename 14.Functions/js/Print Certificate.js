function printCertificate(grade, nameArr) {

  if (pass(grade)) {

    printHeader();
    printName(nameArr);
    formatGrade(grade);
  } else {
    
    let msg = `${nameArr[0]} ${nameArr[1]} does not qualify`;
    console.log(msg);
  }

  //=================================
  function printHeader() {
    console.log('~~~-   {@}   -~~~');
    console.log('~- Certificate -~');
    console.log('~~~-  ~---~  -~~~');
  }
  //=================================

  //=================================
  function printName(nameArr) {
    return console.log((nameArr[0] + ' ' + nameArr[1]));
  }
  //=================================

  //=================================
  function formatGrade(grade) {

    let description;
    let formatGrade = grade.toFixed(2);
    
    if (grade < 3) {
      formatGrade = 2;
      description = "Fail";
    } else if (grade < 3.50) {
      description = "Poor";
    } else if (grade < 4.50) {
      description = "Good";
    } else if (grade < 5.50) {
      description = "Very good";
    }  else {
      description = "Excellent";
    }
  
    return console.log((`${description} (${formatGrade})`));
  }
  //=================================

  //=================================
  function pass(grade) {
  
    if (grade < 3) {
      return false;
    } else {
      return true;
    }
  }
  //=================================

}
printCertificate(4.95, ['Georgi', 'Donchev']);
// printCertificate(2.95, ['Georgi', 'Donchev']);
