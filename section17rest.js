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

// // 📗 example 2 - concatenate arrays
// const a = [1,2,3];
// const b = [4,5];

// const c = a.concat(b).concat(6);
// console.log(c)

// const d = [...a,...b,6]  //easier to read and same outcome
// console.log(d);

// // 📗 example 3 - create date
// const dateInfo = [2025,5,10];

// const date = new Date(...dateInfo);
// console.log(date)

// // 📗 example 4 - copy array
// const myArray = ["a", 5, [], true];

// const newArray = [...myArray];
// newArray.push(10); //myArray is not mutates
// newArray[2].push(7) //myArray is mutated
// console.log(newArray);

// // 📗 example 5 - copy object (ES2018)
// const myObject = {a:10,b:"c", d:[1,2]};
// const copiedObject = {...myObject };
// copiedObject.a=20; //myObject is not mutated
// copiedObject.d.pop(); //myObject is mutated
// console.log(copiedObject);
// console.log(myObject)


// // 📗 example 6 - spread string

// const myStr = "hello world";

// const letters = [...myStr];
// console.log("letters",letters);
// const oldStyleLetters = myStr.split("");
// console.log(oldStyleLetters)


// //💯 challenge 5-1
// /*
// Create a function "meanScore" that will accept any quantity of the arguments, gather them into single array and return mean value of all arguments rounded to 2 decimal places.
// If at least one element in the gathered array is not a number - throw following error to the console: 
// "Supplied arguments must contain only numbers!"
// Type of the returned value must be a "number".
// HINT: In this Challenge you should use both rest and spread operators.
// */
// const meanScore = (...scores) => {
//     if (scores.every(score => typeof score ==="number")) {
//         ///calculate mean
//         return parseFloat(scores.reduce((avg, score) => {
//             return avg + score/ scores.length;
//         }, 0).toFixed(2)
//         );
//     } else {
//         throw new Error (
//             "args must contain numbers!"
//         )
//     }
// }
// const scores1 = [0, 1.5, 2.5, 3.7];
// const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
// const scores3 = [1.3, 2.5, 1.9];
// const scores4 = ["abc", 1.3, true, 2.5, 1.9];



// console.log(meanScore(...scores1)); // 1.93

// console.log(
//   meanScore(...scores1, ...scores2)
// ); // 2.8

// console.log(
//   meanScore(...scores1, ...scores2, ...scores3)
// ); // 2.59

// console.log(meanScore(...scores4)); // Supplied arguments must contain only numbers!


//rest parameter review (collection of all remained elements into an array)
var myName = ["Marina" , "Magdy" , "Shafiq"] ;
const [firstName , ...familyName] = myName ;
console.log(firstName); // Marina ;
console.log(familyName); // [ "Magdy" , "Shafiq"] ;

//spread operator review (unpacks collected elements into single elements)
var myName = ["Marina" , "Magdy" , "Shafiq"];
var newArr = [...myName ,"FrontEnd" , 24];
console.log(newArr) ; // ["Marina" , "Magdy" , "Shafiq" , "FrontEnd" , 24 ] ;