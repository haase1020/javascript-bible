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


   /*
 💯 Challenge 1 (7-4)
    Create new class "ExtendedArray" that should extend built-in "Array"
    Add two custom methods to the new class:
  1. "sum" - it should return sum of all elements in the array
  2. "onlyNumbers" - it should return new array that will contain only numbers from the source array
 
    Create several instances of the new "ExtendedArray" class and test both methods "sum" and "onlyNumbers"
 */

class ExtendedArray extends Array {
    sum() {
      return this.reduce((sum, el) => sum + el);
    }
  
    onlyNumbers() {
      return this.filter(el => typeof el === "number");
    }
  }
  
  const firstInstance = new ExtendedArray(2, 3, 6, 10);
  
  console.log(firstInstance.sum());
  console.log(firstInstance.onlyNumbers()); // [2, 3, 6, 10]
  
  firstInstance.push("abc");
  
  console.log(firstInstance); // [2, 3, 6, 10, "abc"]
  
  console.log(firstInstance instanceof ExtendedArray); // true
  
  console.log(firstInstance instanceof Array); // true
  
  console.log(firstInstance instanceof Object); // true
  
  console.log(
    firstInstance.__proto__ === ExtendedArray.prototype
  ); // true
  
  const secondInstance = new ExtendedArray(
    true,
    "",
    null,
    2,
    10,
    false,
    "abc"
  );
  
  const filteredArray = secondInstance.onlyNumbers();
  
  console.log(filteredArray); // [2, 10] - still instanceof ExtendedArray