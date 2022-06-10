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

  return (`${description} (${formatGrade})`);

}
console.log(formatGrade(4.49));
// formatGrade(2.59);
// formatGrade(2.99);
// formatGrade(3.00);
// formatGrade(4.49);
// formatGrade(4.56321);