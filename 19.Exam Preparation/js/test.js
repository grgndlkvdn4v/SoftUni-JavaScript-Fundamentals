function test(loot) {


  let stolenItems = loot.splice(-7);
  console.log(stolenItems[-1]);
  console.log(stolenItems);
  console.log(loot);

}
test([1,2,3,4,5])