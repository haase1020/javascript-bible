// //✔️ ⏱️ 💻 😉 🌳 📗 💯 ✨
/*
💯
Summary: 
Arrows functions are anonymous
Arrows functions are expressions
Arrows functions don't have own "this"
💯
*/


// // ✔️ function declaration
// function fn(a, b) {
//     console.log (a + b)
// }

// fn (2,3); //5

// // ✔️ anonymous function expression assigned to variable
// //  ✨the 3 fns below can also be named - which is better since
// //     then you know explicitly what the functions do
// const fn1 = function(a, b) {
//     console.log(a + b)
// }

// console.log(fn1(4,5)) // 9

// // // // ✔️ IIFE
// // (function(a, b) {
// //     console.log("IIFE is executed!");
// //     return a + b;
// // })(5,6)

// // // ✔️ callback function
// // setTimeout(function(a, b) {
// //     console.log("CBexecuted!")
// //     console.log(a + b)
// // }, 1000);

// // // ✔️ Arrow functions are anonymous!! They are all expressions!!
// // // ✔️ syntax:

// // //implicit return of a + b
// // (a, b) => a + b  //no semicolon because expression
// // // 😉 the same thing:
// // // explicit return of a + b
// // (a, b) => {
// //     return a + b;  //here you have semicolon because you use return statement
// // }
// // // omit () without one parameter
// // a => a * a  
// // // () are mandatory without any parameters
// // () => 2
// // //implicit return of object
// // (a, b) => ({
// //     a1: a,
// //     b1: b
// // })  //if you add parantheses is becomes an object literal. Needed for creating an object

// // //explicit return of object
// // (a, b) => {
// //    return {
// //     a1: a,
// //     b1: b
// //    } 
// // }

// // 📗 Practice: Arrow Functions 

// // 🌳 example 1
// const sum = (a, b) => a+ b;
// console.log(sum(1, 2)) // must call function after you have declared it

// // 🌳 example 2
// const post = {
//     title: "sample title",
//     comments: 6,
//     shared: true,
//     published: true,
//     postId: 1234
// }


// //explicit return of object
// // const processedPost = (post) => {
// //     return {
// //         title: post.title,
// //         comments: post.comments,
// //         popular: post.comments > 5 ? true: false
// //     }
// // };

// // 💯 implicit return of the object 

// const processedPost = (post) => ({

//         title: post.title,
//         comments: post.comments,
//         popular: post.comments > 5 ? true: false

// });

// console.log(processedPost(post));

// // 🌳 example 3
// (() => {
//     function greet() {
//         return "Hey there!"; //window.greet() in console to access
//     }
//     console.log(this);
//     this.greet = greet;
//     return this;
// })();


// // 🌳 example 4

// const sum2 = (a,b) => a + b;
// console.log("sum function",sum2 (1,2))

// // 🌳 example 5

// const postIt = {
//     title:"a title",
//     comments: 10,
//     shared: true,
//     published: true,
//     postId: 121
// }

// // // explicit return of the object
// // const producePost = (postIt) => {
// //     return {
// //         title: postIt.title,
// //         comments: postIt.Ccomments,
// //         popular: postIt.comments > 5 ? true: false
// //     }
// // }

// // implicit return of the object: preferred way
// const producePost = (postIt) => ({

//         title: postIt.title,
//         comments: postIt.Ccomments,
//         popular: postIt.comments > 5 ? true: false
// })

// console.log(producePost(postIt))


// 🌳 example 6
// (() => {
//     function greet() {
//         return "life is good";
//     }
//     console.log(this);
//     this.greet = greet;
//     return this; //appending greet to the global window object
// })(); // then input window.greet() in console


/*
  ✨ arrow functions don't have own "this". "this" in arrow functions is
always statically defined by the surroundign lexical scope. ✨
*/

// 🌳 example 1
// const num = {
//     value: 100,
//     info: () => {

//         //arrow fn doesn't have own "this"
//         console.log(this); // num object
//         return this.value
//     }
//     // info: function info() {
//     //     console.log(this);
//     //     return this.value;
//     // }
// };
// console.log(num.info())

// // 🌳 challenge # 150
// const createButton =(title) => {
//   const btn = document.createElement("button");
// let numClicks = 0; //closed variable in function

//   btn.innerHTML = title
//   // btn.onclick = function() {
//   //   console.log("you clicked me")
//   //   btn.innerHTML = `button clicked ${numClicks} times`;
//   // };


//   //regular function expression
//   // btn.addEventListener("click", function() {
//   //   console.log("you clicked me")

//   // //"this" works in regular function
//   // // dynamically changed based on context
//   //   btn.innerHTML = `button clicked ${numClicks} times`;
//   // })

//   //arrow function expression
//   btn.addEventListener("click", () => {
//     console.log("you clicked me")
//     //"this" is the window object and will not dynamically change
//     // in an arrow function
//     btn.innerHTML = `button clicked ${++numClicks} times`;
    
//   })

//   document.body.appendChild(btn);
// }

// createButton("click me");
// createButton("click me too")

// 🌳 arguments in the functions 🌳
// 😉 regular function
function sum() {
  console.log(arguments);
  console.log(typeof arguments);
  console.log(Array.isArray(arguments)) //false
  const argumentsArray= Array.from(arguments)
  console.log(argumentsArray)
}

// 😉 arrow function using rest operator (or else error)
const sum2 =(...arguments) => {
  console.log(arguments);
  console.log(typeof arguments);
  console.log(Array.isArray(arguments)) //true
  const argumentsArray= Array.from(arguments)
  console.log(argumentsArray)
}


sum (1,2,3,4,5)
sum2 (1,2,3,4,5)