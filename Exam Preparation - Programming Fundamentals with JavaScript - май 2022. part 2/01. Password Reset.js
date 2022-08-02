function passwordReset(input) {

  let str = input.shift();

  let index = 0, commandLine;
  while ( (commandLine = input[index++]) !== 'Done' ) {
    let [command, firstCond, secondCond] = commandLine.split(' ');

    switch (command) {
      case 'TakeOdd': takeOdd(); break;
      case 'Cut': cut(command, firstCond, secondCond); break;
      case 'Substitute': substitute(command, firstCond, secondCond); break;
      default: console.log('DEFAULT CASE !?!'); break;
    }
  }

  console.log( `Your password is: ${str}` );
  
  function takeOdd() {
    let modifiedStr = '';

    let modify = str.split('').forEach( (el, i) => {
      if ( i % 2 !== 0 ) {
        modifiedStr += el;
      }
    });
    
    str = modifiedStr;
    console.log(str);
  }

  function cut(command, firstCond, secondCond) {
    let index = Number( firstCond );
    let length = Number( secondCond );

    let strToRemove = str.substring(index, index + length);
    str = str.replace(strToRemove, '');

    console.log(str);
  }

  function substitute(command, firstCond, secondCond) {
    let substring = firstCond;
    let substitute = secondCond;

    if ( !str.includes(substring) ) {
      console.log( 'Nothing to replace!' );
    } 
    else {

      while ( str.includes(substring) ) {
        str = str.replace(substring, substitute);
      }
      console.log(str);
    }

  }

}
passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);