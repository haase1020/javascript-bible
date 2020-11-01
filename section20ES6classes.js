// ✔️ ⏱️ 💻 😉  📗🌳 💯 ✨

/*
🌳Classes🌳 don't change prototypal inheritance behavior.
🌳It's just more simplete and declarative way to create Prototype Chain
*/

/*
class MyClass {✨class is not object literal!!✨
    constructor(props) { ✨ reserved word "constructor"✨
        this.title = props.title;
        this.qty = props.pty;
    }
✨ no comma here✨
info() { ✨method of the prototype(not own property of each instance)✨
    console.log(`Quantity is ${this.qty})
}
}
*/

/*
 🌳function constructors 
function MyConstructor(props) {
    this.title = props.title;;
    this.qty = props.qty;
}

MyConstructor.prototype.info = function() { ✨adding method with function constructor ✨
    console.log(`quantity is ${this.qty}`);
};
const props = {
    title: "test title",
    qty: 5
}
const newInstance = new MyConstructor(props);
newInstance.info; //quatntity is 5

vs 🌳Classes 
class MyClass {
    constructor(props) {
       this.title = props.title;;
       this.qty = props.qty;
    }
    info() {
        console.log(`quantity is ${this.qty}`); ✨adding method with classes ✨
    }
}
const props = {
    title: "test title",
    qty: 5
}
const newInstance = new MyClass(props); // that's all- you don't need to write newinstance.info
✨ refer to classes vs. function constructors lecture to see how to extend another class✨

// /*
// 💯 Challenge 1 (7-3)
// Convert function constructors to Classes
// */

class Product {
    constructor({ price }) {
      this.price = price;
    }
  
    priceInfo() {
      console.log(`Price of the product is ${this.price}`);
    }
  }
  
  class ElectricDevice extends Product {
    constructor(props) {
      super(props);
      this.energyEfficiencyClass =
        props.energyEfficiencyClass;
    }
  
    energyInfo() {
      console.log(
        `Energy Efficiency Class is ${
          this.energyEfficiencyClass
        }`
      );
    }
  }
  
  class TV extends ElectricDevice {
    constructor(props) {
      super(props);
      this.model = props.model;
      this.diagonal = props.diagonal;
    }
  }
  
  const propsForMyTv = {
    model: "A1620",
    price: 1200,
    energyEfficiencyClass: "A+",
    diagonal: 42
  };
  
  const myTV = new TV(propsForMyTv);
  
  /**
   * VERIFICATION
   */
  
  console.log(myTV);
  /* {
    model: "A1620",
    price: 1200,
    energyEfficiencyClass: "A+",
    diagonal: 42,
    __proto__: ...
  } */
  
  myTV.energyInfo(); // "Energy Efficiency Class is A+"
  
  myTV.priceInfo(); // Price of the product is 1200
  
  myTV instanceof TV; // true
  myTV instanceof ElectricDevice; // true
  myTV instanceof Product; // true
  myTV instanceof Object; // true