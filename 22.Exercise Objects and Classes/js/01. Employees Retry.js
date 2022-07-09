function employees(input) {

  for (const employee of input) {
    let personalNumber = employee.length;

    let employeeObj = {
      name: employee,
      personalNumber
    }

    console.log(`Name: ${employeeObj.name} -- Personal Number: ${employeeObj.personalNumber}`);
  }

}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);