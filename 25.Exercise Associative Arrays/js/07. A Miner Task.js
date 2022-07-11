function aMinerTask(input) {
  let yield = new Map();

  let index = 0;
  while (index < input.length) {
    let resource = input[index++];
    let quantity = Number(input[index++]);

    let quantitySet = new Set();
    quantitySet.add(quantity);

    if (!yield.has(resource)) {
      yield.set(resource, quantitySet);
    }
    else {
      yield.set(resource, yield.get(resource).add(quantity));
    }
  }

  for (const [resource, quantity] of Array.from(yield)) {
    let quantitySum = 0;

    for (const iterator of quantity) {
      quantitySum += iterator;
    }

    console.log(resource + " -> " + quantitySum);
  }
}
aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);