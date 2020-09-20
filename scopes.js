'use strict';
//global and function scopes
// let a;
// let b;

// function myFn() {
//   let b;
//   a = true;
//   b = 10;
//   console.log(b); //10
// }

// myFn();
// console.log(a); //true
// console.log(b); //undefined

// scope chain --> inner --> local --> global

//undeclared variable
//use strict mode to avoid accidentally assigning global variables in a fn

function myFn1() {
  a = true; // in strict will get ReferenceError
  console.log(a);
}

myFn1();
console.log(a);
