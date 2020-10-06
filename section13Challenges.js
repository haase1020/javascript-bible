// // const and let don't work with hoisting --> compilation + execution = hoisting

// //function declaration --> does declaration, initialization and assignment all together
// function smile() {
//   console.log('😉😉😉');
// }

// smile();

// //function expression as IIFE
// (function () {
//   console.log('😇😇😇');
// })();

// //function expression assigned to a variable --> temporal dead zone beware!!
// // declaration but not initialized. When executed the function is initialized and assigned (see lecture 134)
// const cowboy = function (a) {
//   return a;
// };

// console.log(cowboy('🤠🤠🤠')); //returns console log
