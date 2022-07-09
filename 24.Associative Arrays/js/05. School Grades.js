function schoolGrades(input) {
  let gradesMap = new Map();
  
  for (let iterator of input) {
    iterator = iterator.split(" ");
    let name = iterator.shift();
    let grades = iterator;
  
    let avrGrade = avrGradeCalculator(grades);

    if (!gradesMap.has(name)) {
      gradesMap.set(name, avrGrade);
    }
    else {
      let oldGrade = (gradesMap.get(name));
      // avrGrade = avrGradeCalculator(grades);
      avrGrade = (avrGrade + oldGrade) / 2;
      gradesMap.set(name, avrGrade);
    }
  }

  let entries = Array.from(gradesMap.entries());
  let sortedByName = entries.sort( (a, b) =>
    a[0].localeCompare(b[0]) );

  for (const [name, grade] of sortedByName) {
    console.log(name + ": " + grade.toFixed(2));
  }

  function avrGradeCalculator(grades) {
    let sum = 0;
    for (const currGrade of grades) {
        sum += Number(currGrade);
    }
    return sum / grades.length;
  }

}

schoolGrades(["b 5", "a 4", "c 2", "c 3", "b 6", "c 2"])
// schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
// schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);