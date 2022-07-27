function test() {
  
  dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took 1587s a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic  typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

  let pattern = /(\d+)(s)/g;

  let matches = dummyText.match(pattern);
  let execMatches = pattern.exec(dummyText);
  // console.log(matches);

  while (execMatches !== null) {
    console.log( execMatches );
    execMatches = pattern.exec(dummyText);
  }



}
test();