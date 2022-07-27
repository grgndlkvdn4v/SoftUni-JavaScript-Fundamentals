function softUniBarIncome(input) {
  let text = input.join(", ");

  let pattern = /%(?<customer>[A-Z][a-z]+)%[^\|\$\%\.]*<(?<product>\w+)>[^\|\$\%\.]*\|(?<count>\d+)[^\|\$\%\.]*\|(?<price>\d+\.*\d*)\$/gm;

  let totalPrice = 0;
  let match;

  while (  (match = pattern.exec(text)) !== null ) {

    let customer = match.groups['customer'];
    let product = match.groups['product'];
    let count = Number( match.groups['count'] );
    let price = Number( match.groups['price'] );
    let cost = count * price;
    totalPrice += cost;

    console.log(`${customer}: ${product} - ${cost.toFixed(2)}`);
  }

  console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift"
]);