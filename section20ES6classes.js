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
// 📗 Example 1
// Class declaration and instance of the Class
// */
// class myClass {

// }
// const firstInstance = new myClass();

// console.log(firstInstance);

// /*
// 📗 Example 2
// Hoisting: class can be accessed only after it's declaration in the code
// */

// const firstInstance = new myClass(); // declared but not initialized so get error
// class myClass {

// }

// /*
// 📗 Example 3
// Class Expression
// */

// const MyClass = class {}; // class expression is same as declaration

// const firstInstance = new McClass();

// console.log(firstInstance);

// /*
// 📗 Example 4
// constructor method in the class
// */

// class ComputerMouse {
//     constructor(props) {
//         this.type = props.type;
//         this.color = props.color;
//         this.interface = props.interface;
//     }
// }

// const propsForWirelessMouse = {
//     type: "wireless",
//     color: "white",
//     interface: "bluetooth"
// };

// const wirelessMouse = new ComputerMouse(
//     propsForWirelessMouse
// );

// console.log(wirelessMouse)


/*
📗 Example 5
Class is NOT object literal and it's methods are not shorthand method names
*/
//correct format
class ComputerMouse {
    constructor() {} // no commas
    method1() {}
    method2(props) {}
}



/*
📗 Example 6
default values for properties
*/
class ComputerMouse {
    constructor(props) {
        this.type = props.type || "Computer";
        this.color = props.color;
        this.interface = props.interface;
    }
}

const propsForWirelessMouse = {
    type: "wireless",
    color: "white",
    interface: "bluetooth"
};

const wirelessMouse = new ComputerMouse(
    propsForWirelessMouse
);

const propsForGenericMouse = {
    color: "red"
};

const genericMouse = new ComputerMouse(propsForGenericMouse);

console.log(genericMouse)