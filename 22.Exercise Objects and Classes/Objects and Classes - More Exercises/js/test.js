function test() {

    let studentInfoObj = {
        grade: 9,
        listOfStudents: ["Mark"],
        averageScore: 5.00
    }

    
    studentInfoObj.listOfStudents += " Daryl";
    studentInfoObj.listOfStudents = studentInfoObj.listOfStudents.split(" ");
    console.log(studentInfoObj.listOfStudents);


}
test();