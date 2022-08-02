function fancyBarcodes(input) {
  let iterations = Number( input.shift() );
  let text = input.join(', ');

  let pattern = /\@\#+([A-Z][a-zA-Z\d]{4,}[A-Z])\@\#+/gm;
  let isNum = /\d/g;

  for (let i = 0; i < iterations; i++) {
    let commandLine = input[i];
    let productGroup = '';

    let match;
    while ( (match = pattern.exec(commandLine)) !== null ) {
        console.log(match[1]);
    //   for (const symbol of match[1]) {
    //     if (isNum.test(symbol)) {
    //       productGroup += symbol;
    //     }
    //   }
    // }

    // if (!productGroup) {
    //   productGroup = '00';
    }
    // console.log(`Product group: ${productGroup}`);
  }




}
// fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);

fancyBarcodes([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
