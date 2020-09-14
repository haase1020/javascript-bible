let a; // declaration
const b = 10; //declaration and assignment
a = 'hello everyone'; //assignment

console.log(a, b);
//can reassign value
let c = 10;
c = 5;
console.log(c);
//can reassign value
var d = true;
d = false;
console.log(d);
//can't reassign value
const e = 'does this work?';
// e = 'nope'; //cant reassign values to const (type error)
// console.log(e);

//practice from lecture #30 Variable declaration and assignment
//example 1: variable declaration
var example1;
// console.log(example2); // will throw a type error

// const example3; //Uncaught SyntaxError: Missing initializer in const declaration
