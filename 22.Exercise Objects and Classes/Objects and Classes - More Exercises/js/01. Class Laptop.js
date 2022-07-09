class Laptop{
  constructor(info, quality) {
    this.info = info;
    this.quality = quality;
    this. isOn = false;
  }

  producer = info.producer;
  age = info.age;
  brand = info.brand;

  turnOn()  { 
    if (!this.isOn) {
      this.isOn = true;
      this.quality--;
      this.price = 800 - (this.info.age * 2) + (this.quality * 0.5);
    }
  };

  turnOff() {
    if (this.isOn) {
      this.isOn = false;
      this.quality--;
      this.price = 800 - (this.info.age * 2) + (this.quality * 0.5);
    }
  };
  
  showInfo() { return JSON.stringify(this.info) };
}


let laptop = new Laptop({producer: "Dell", age: 2, brand: "XPS"}, 10);

laptop.turnOn()
laptop.turnOff()
laptop.turnOn()


{
// let info = {producer: "Dell", age: 2, brand: "XPS"}
// let laptop = new Laptop(info, 10)

// laptop.turnOn()
// console.log(laptop.showInfo())
// laptop.turnOff()
// console.log(laptop.quality)
// laptop.turnOn()
// console.log(laptop.isOn)
// console.log(laptop.price)
}
