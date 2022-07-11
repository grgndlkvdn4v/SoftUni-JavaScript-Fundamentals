function companyUsers(input) {
  let employees = new Map();

  for (const iterator of input) {
    let [company, id] = iterator.split(" -> ");

    let IDsSet = new Set();
    IDsSet.add(id);
    
    if (!employees.has(company)) {
      employees.set(company, IDsSet);
    } 
    else {
      let oldIDs = employees.get(company);
      let newIDs = oldIDs.add(id)
      employees.set(company, newIDs);
    }
  }
  
  let entries = Array.from(employees).sort();

  for (const [company, IDs] of entries) {
    console.log(company);
    for (const id of IDs) {
      console.log("-- " + id);
    }
  }

}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "SoftUni -> AA12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);