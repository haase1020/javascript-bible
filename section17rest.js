// ✔️ ⏱️ 💻 😉 🌳 📗 💯 ✨

//  🌳 rest parameters
// ✔️ anonymous function so arguments parameter not available
// const sumNumbers = (...nums) => {
//     console.log(nums);
//     // console.log(arguments) //Uncaught ReferenceError: arguments is not defined
//     return nums
//     .filter(num => typeof num === "number")
//     .reduce((sum,num) => sum + num, 0)
// };

// console.log(sumNumbers("abc",1,2,3,4,5,6,7))


// // ✔️ regular function
// function sumNumbers(...nums){
//     //option 1 = - rest parameter
//     console.log(nums); //array
//     console.log(arguments) //this is now an object, so much convert to array
//     return nums
//     .filter(num => typeof num === "number")
//     .reduce((sum,num) => sum + num, 0)
// };

// console.log(sumNumbers("abc",1,2,3,4,5,6,7))


//  🌳 spread operator

// // 📗 example 1
// const myGreeting = (name, city, age) => {
//     return `hello from ${name} who is ${age} years old and lives in ${city}`;
// };

// const myPerson = ["Alice", "Boston", 100];
// console.log(myGreeting(...myPerson));

// const anotherPerson = ["NewYork", 200]
// console.log(myGreeting("Bob", ...anotherPerson))

// 📗 example 2