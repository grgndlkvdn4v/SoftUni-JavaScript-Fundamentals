function schoolRegister(input) {
  let newArr = [];

    let iterations = input.length;
  for (let i = 0; i < iterations; i++) {
    const studentInfo = input[i];
    let [name, grade, score] = studentInfo.split(", ");

    name = name.replace("Student name: ", "");
    grade = Number(grade.replace("Grade: ", ""));
    score = Number(score.replace("Graduated with an average score: ", ""));

    let obj = { name, grade, score };
    if (obj.score >= 3) {
      newArr.push(obj);
    }
  }
  
  for (let currGrade = 1; currGrade + 1 <= 12; currGrade++) {
      let listOfStudents = [];
      let averageScore = 0;

    for (let studentInfo of newArr) {

      if (studentInfo.grade === currGrade) {
        listOfStudents.push(studentInfo.name);
        averageScore += studentInfo.score;
      }
    }

    averageScore = averageScore / listOfStudents.length;

    if (listOfStudents.length) {
      console.log(`${currGrade + 1} Grade`);
      console.log(`List of students: ${listOfStudents.join(", ")}`);
      console.log(`Average annual score from last year: ${averageScore.toFixed(2)}\n`);
    }

  }

}
schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);