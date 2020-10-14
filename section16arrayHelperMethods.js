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

// // 🌳 map
// const myNumbers = [1,5,7];
// // option 1
// // let mySquareNumbers = myNumbers.map(
// //     element => element * element
// // );

// // console.log(mySquareNumbers)
// // console.log(myNumbers)

// //option 2
// const squareNumbers = (element, index) => {
//     console.log("element at index " + index + " is " + element);
//     return element * element;
// };
// let mySquareNUmbers = myNumbers.map(squareNumbers);


// // 🌳 map challenge
// const postsJSON = [
//     '{"postID": 123, "commentsQuantity": 2}',
//     '{"postID": 124, "commentsQuantity": 5}',
//     '{"postID": 125, "commentsQuantity": 6}',
// ];


// // ✨ for loop option
// // var posts = [];
// // for (let i = 0; i < postsJSON.length; i++) {
// //     posts.push(JSON.parse(postsJSON[i]))
// // }

// // console.log(posts); //each post
// // console.log(posts[0].postID)// 123

// // // ✨ map option 1
// // const posts = postsJSON.map(JSON.parse);


//  // ✨ map option 2
//  const posts = postsJSON.map(post => JSON.parse(post));

 
//  console.log(posts); //each post
//  console.log(posts[0].postID)// 123

// 🌳 filter
// produces a new output array
const myNumbers = [10,20,30,40,50,4];

const filteredNums = myNumbers.filter(num => num > 10);

console.log(filteredNums)