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

*/