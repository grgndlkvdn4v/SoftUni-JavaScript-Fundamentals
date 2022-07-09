function personInfo(firstName, lastName, age) {

// {  let person = {}
//   person.firstName = firstName;
//   person.lastName = lastName;
//   person.age = age;

//   console.table(person);}

  let person = {
    firstName, lastName, age
  }
  return person

  // console.table(person);
  // console.log(typeof person.age);

}
personInfo("Peter", "Pan", 20);
personInfo("George", "Smith", "18");