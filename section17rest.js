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

// 📗 example 4 - copy array
const myArray = ["a", 5, [], true];

const newArray = [...myArray];
newArray.push(10); //myArray is not mutates
newArray[2].push(7) //myArray is mutated
console.log(newArray);

// 📗 example 5 - copy object (ES2018)
const myObject = {a:10,b:"c", d:[1,2]};
const copiedObject = {...myObject };
copiedObject.a=20; //myObject is not mutated
copiedObject.d.pop(); //myObject is mutated
console.log(copiedObject);
console.log(myObject)