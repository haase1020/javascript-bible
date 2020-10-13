// //✔️ ⏱️ 💻 😉 🌳 📗 💯 ✨


// // 🌳 For each 
// const myArray = [1,true, "abc"]

// myArray.forEach((i) => {
//     console.log(i)
// })

// const myCities = ["London", "Tokyo", "Osaka"]

// const arrayInfo = (element, index) => {
//     console.log(element + " is located at the index " + index + " in the array")
// };

// myCities.forEach((element, index) => {
//     console.log(arrayInfo(element, index))
// })

// 🌳 map
const myNumbers = [1,5,7];
// option 1
// let mySquareNumbers = myNumbers.map(
//     element => element * element
// );

// console.log(mySquareNumbers)
// console.log(myNumbers)

//option 2
const squareNumbers = (element, index) => {
    console.log("element at index " + index + " is " + element);
    return element * element;
};
let mySquareNUmbers = myNumbers.map(squareNumbers);