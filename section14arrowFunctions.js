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