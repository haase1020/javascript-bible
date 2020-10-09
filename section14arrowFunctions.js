//✔️ ⏱️ 💻 😉 🌳 📗 💯 ✨

// ✔️ function declaration
function fn(a, b) {
    console.log (a + b)
}

fn (2,3); //5

// ✔️ anonymous function expression assigned to variable
//  ✨the 3 fns below can also be named - which is better since
//     then you know explicitly what the functions do
const fn1 = function(a, b) {
    console.log(a + b)
}

console.log(fn1(4,5)) // 9

// ✔️ IIFE
// (function(a, b) {
//     // console.log("IIFE is executed!")
//     return a + b;
// })(5,6);

// ✔️ callback function
setTimeout(function(a, b) {
    console.log("CBexecuted!")
    console.log(a + b)
}, 1000);

// // ✔️ Arrow functions are anonymous!! They are all expressions!!
// // ✔️ syntax:

// //implicit return of a + b
// (a, b) => a + b  //no semicolon because expression
// // 😉 the same thing:
// // explicit return of a + b
// (a, b) => {
//     return a + b;  //here you have semicolon because you use return statement
// }
// // omit () without one parameter
// a => a * a  
// // () are mandatory without any parameters
// () => 2
// //implicit return of object
// (a, b) => ({
//     a1: a,
//     b1: b
// })  //if you add parantheses is becomes an object literal. Needed for creating an object

// //explicit return of object
// (a, b) => {
//    return {
//     a1: a,
//     b1: b
//    } 
// }

// 📗 Practice: Arrow Functions 