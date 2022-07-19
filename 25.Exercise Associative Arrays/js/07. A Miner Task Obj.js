function aMinerTask(input) {
  let yieldObj = {};

  let index = 0;
  while (index < input.length) {
    let resource = input[index++];
    let quantity = Number(input[index++]);
    
    if ( !yieldObj.hasOwnProperty(resource) ) {
      yieldObj[resource] = quantity;
    } else {
      yieldObj[resource] += quantity;
    }
  }

  for (const [k, v] of Object.entries(yieldObj)) {
    console.log(`${k} -> ${v}`);
  }
}

// aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);

aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);