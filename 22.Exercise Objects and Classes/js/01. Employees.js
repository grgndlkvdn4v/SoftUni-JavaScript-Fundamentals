function employees(input) {

  class Employee {
    constructor (name, personalNumber) {
      this.name = name;
      this.personalNumber = personalNumber;
    }

    print() {
      console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
    }
  }

  while (input.length > 0) {
    let name = input.shift();
    let personalNumber = name.length;
    
    let employee = new Employee(name, personalNumber)
    employee.print();
  }

}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);