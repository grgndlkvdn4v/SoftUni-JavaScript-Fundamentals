function fancyBarcodes(input) {
  let iterations = Number( input.shift() );
  let pattern = /\@\#+(?<barcode>[A-Z][a-zA-Z0-9]{4,}[A-Z])\@\#+/gm;
  let barcodesObj = {};

  for (const iterator of input) {
    barcodesObj[iterator] = 'Invalid barcode';
  }

  let matches;
  while ( (matches = pattern.exec(input)) !== null ) {
    let productGroupArr = [];

    let fullBarcode = matches[0];
    let barcode = matches.groups['barcode'];

    for (const symbol of barcode) {
      if ( !isNaN( Number(symbol) ) ) {
        productGroupArr.push(symbol);
      }
    }
    
    let productGroup = productGroupArr.join('');
    if (!productGroupArr.length) {
      productGroup = '00'
    }

    barcodesObj[fullBarcode] = productGroup;
  }

  for (const key in barcodesObj) {

    if (barcodesObj[key] === 'Invalid barcode') {
      console.log( barcodesObj[key] );
    } else {
      console.log( `Product group: ${barcodesObj[key]}` );
    }
  }

}
fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
console.log('');
fancyBarcodes([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);