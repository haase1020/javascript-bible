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
e = 'nope'; //cant reassign values to const (type error)
console.log(e);
