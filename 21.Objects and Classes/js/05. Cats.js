function cats(input) {

  class Cat {
    constructor(name, age) {
      this.name =  name
      this.age = age
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  // let catsArr = [];

  for (const iterator of input) {
    let [name, age] = iterator.split(" ");
    let cat = new Cat(name, age)
    cat.meow();
  }
    
    // let command = iterator.split(" ");
    // let cat = new Cat(command[0], command[1])
    // catsArr.push(cat);
    // }

  // console.log("===========");
  // for (const iterator of catsArr) {
  //   iterator.meow()
  // }

}
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);