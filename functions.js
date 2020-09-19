// // function is a reusable set of statements and expressions (it's an object!!)
// // function can be: 1) a variable with a value, 2) assigned as a value to the other variable
// // 3) anonymous, 4) used as argument in the call to the other function,
// // 5) value of the property in the object

// // EXAMPLE 1: smallest function
// function myFn() {}
// myFn(); //undefined

// console.log(myFn); //

// const myFunction = myFn();
// console.log(myFunction); // undefined
// console.log(myFn()); // undefined

// // EXAMPLE 2 parameters of the fn

// function myFunction2(a, b) {
//   console.log(a);
//   console.log(b);
// }

// myFunction2(10, 5); //10 5
// myFunction2(true, null); // trued null
// myFunction2(); //undefined undefined
// myFunction2('hi'); //hi undefined

// //EXAMPLE 3
// //function scope
// function myFunction3(a, b) {
//   console.log(a, b);
// }
// console.log(myFunction3(3, 2)); //undefined

// // EXAMPLE 4 reuse param names

// const a = 'hey';
// const b = 'there';
// function myFunction4(a, b) {
//   console.log(a, b);
// }
// function myFunctionAgain(a, b) {
//   console.log(a, b);
// }
// myFunction4(2, 3);
// myFunctionAgain(4, 5);
// console.log(a, b); //hey there

// // EXAMPLE 5
// // add 'return'

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(10, 5));

// // EXAMPLE 6
// // what happens after return

// function myFunction6(a) {
//   console.log(a);
//   return a; //function stops here
//   console.log(a);
// }

// myFunction6(10);

// // function declaration vs. function expression

// //fn declaration
// function myFuncDeclaration(a, b) {
//   let c;
//   a = a + 1;
//   c = a + b;
//   return c;
// }

// // fn expression --> always anonymous --> can't be used standalone
// // function(a,b) {
// //     let c;
// //     a = a + 1;
// //     c = a + b;
// //     return c;
// // }

// // function expression assigned to the variable
// // variable is myAwesomeFunction and fn expression is the anon fn on the right
// const myAwesomeFunction = function (a, b) {
//   let c;
//   a = a + 1;
//   c = a + b;
//   console.log(c);
//   return c;
// };

// myAwesomeFunction(5, 3);

// // function expression as argument in the function call
// //callback function from Window object --> a fn expression
// setTimeout(function () {
//   //function is an anon fn expression
//   console.log('delayed message');
// }, 1000);

// callback function CHALLENGE from lesson 53 Function Expressions

// let num = 1;

// const myInterval = setInterval(function () {
//   console.log(`here is message number ${num}`);
//   num++;
// }, 2000);

// setTimeout(function () {
//   clearInterval(myInterval);
// }, 8000);
