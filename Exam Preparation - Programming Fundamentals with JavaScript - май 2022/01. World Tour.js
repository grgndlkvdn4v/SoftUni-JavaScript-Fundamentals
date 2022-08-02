function worldTour(input) {
  let tourLine = input.shift();

  let index = 0, commandLine;
  while ( (commandLine = input[index++]) !== 'Travel' ) {
    
    if ( commandLine.includes('Add') ) {
      add(commandLine);
    } else if ( commandLine.includes('Remove') ) {
      remove(commandLine);
    } else if ( commandLine.includes('Switch') ) {
      switching(commandLine);
    }
  }

  console.log(`Ready for world tour! Planned stops: ${tourLine}`);


  function add(commandLine) {
    let [command, index, string] = commandLine.split(':');
    index = Number(index);

    tourLine = [...tourLine]; 
    tourLine.splice(index, 0, string);
    tourLine = tourLine.join('');

    console.log(tourLine);
  }

  function remove(commandLine) {
    let[command, startIndex, endIndex] = commandLine.split(':');
    startIndex = Number(startIndex);
    endIndex = Number(endIndex);

    tourLine = [...tourLine]; 
    tourLine.splice(startIndex, endIndex - startIndex);
    tourLine = tourLine.join('');

    console.log(tourLine);
  }

  function switching(commandLine) {
    let [command, strToSwitch, newStr] = commandLine.split(':');

    tourLine = tourLine.split('::');
    tourLine[0] = newStr;
    tourLine = tourLine.join('::');
    console.log(tourLine);
  }


}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);