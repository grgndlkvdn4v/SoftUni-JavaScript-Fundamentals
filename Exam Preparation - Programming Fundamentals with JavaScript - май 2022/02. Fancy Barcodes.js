function fancyBarcodes(input) {
  let iterations = input.shift('')
  let text = input.join(', ');
  
  let pattern = /\@\#+[A-Za-z0-9]{5,}[A-Z]\@\#+/g;

  let validBarcodes = text.match(pattern);
  
  for (const barcode of validBarcodes) {
    let numsArr = []; 
    for (const symbol of barcode) {
      if ( symbol >= 0 && symbol <= 9 ) {
        numsArr.push(symbol);
      }
    }

    if (numsArr.length) {
      console.log( `Product group: ${numsArr.join('')}` );
    } else {
      console.log( 'Product group: 00' );
    }
  }


}
fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);