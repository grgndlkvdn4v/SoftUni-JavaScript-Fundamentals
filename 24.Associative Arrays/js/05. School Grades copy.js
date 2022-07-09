function schoolGrades(input) {
  let gradesMap = new Map();
  
  for (let iterator of input) {
    iterator = iterator.split(" ");
    let name = iterator.shift();
    let grades = iterator;
  
    if (!gradesMap.has(name)) {
      gradesMap.set(name, grades);
    }
    else { // adding the new grades
      let oldGrades = (gradesMap.get(name));
      for (const grade of oldGrades) {
        grades.push(grade);
      }
      gradesMap.set(name, grades);
    }
  }

  let entries = Array.from(gradesMap.entries());
  let sortedByName = entries.sort( (a, b) =>
    a[0].localeCompare(b[0]) );

  for (const [key, value] of sortedByName) {
    let avrGrade = avrGradeCalculator(value);
    gradesMap.set(key, avrGrade);
    console.log(key + ": " + avrGrade.toFixed(2));
  }

  function avrGradeCalculator(value) {
    let sum = 0;
    for (const grade of value) {
        sum += Number(grade);
    }
    return sum / value.length;
  }

}

// schoolGrades(["b 5", "a 4", "c 2", "c 3", "b 6", "c 2"])
// schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
// schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
schoolGrades(["Tim 0834212554", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);