function inventory(input) {
  let newArr=[];

  class Inventory {
    constructor (heroName, heroLevel, heroItems) {
      this.name = heroName
      this.level = heroLevel
      this.items = heroItems;
    }

    printLine() {
      console.log(`Hero: ${this.name}`);
      console.log(`level => ${this.level}`);
      console.log(`items => ${this.items}`);
    }
  }

  while (input.length > 0) {
    let [heroName, heroLevel, heroItems] = input.shift().split(" / ")
    heroLevel = Number(heroLevel);
    newArr.push([heroName, heroLevel, heroItems]);
  }
  
  newArr.sort((a,b) => a.level - b.level);
  
  for (const iterator of newArr) {
    let [heroName, heroLevel, heroItems] = iterator;
    let inventory = new Inventory(heroName, heroLevel, heroItems);
    inventory.printLine();
  }

}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);