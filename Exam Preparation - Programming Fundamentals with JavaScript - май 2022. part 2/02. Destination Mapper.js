function destinationMapper( input ) {
  let destArr = [];
  let totalPoints = 0;
  
  let pattern = /([\=\/])(?<destination>[A-Z][a-zA-Z]{2,})\1/g;

  let match;
  while ( (match = pattern.exec(input)) !== null ) {
    let destination = match.groups['destination'];
    let points = destination.length;

    destArr.push(destination);
    totalPoints += points;
  }

  console.log( `Destinations: ${ destArr.join(', ') }` );
  console.log( `Travel Points: ${totalPoints}` );
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");