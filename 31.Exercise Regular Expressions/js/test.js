function test() {


  let text = '@Cantonica:3000!D!->4000NM';

  let pattern = /[^@\-\!\:>]*@(?<planet>[a-zA-Z]+)[^@\-\!\:>]*:(?<population>[0-9]+)[^@\-\!\:>]*!(?<attackType>[AD])![^@\-\!\:>]*->(?<soldierCount>[0-9]+)/gm;



  let firstMatch = pattern.exec(text);

  console.log(firstMatch);



}
test();