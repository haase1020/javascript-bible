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

// // 🌳 filter
// // produces a new output array
// const myNumbers = [10,20,30,40,50,4];

// const filteredNums = myNumbers.filter(num => num > 10);

// console.log(filteredNums)

// // 🌳 find: produces 1st element matching condition or undefined
// const myArray = [10, [], {}, "abc", true, 15];

// const result = myArray.find( element => typeof element === "number");

// console.log(result) // 10

//  // 🌳 find challenge 1
//  const posts = [
//      {postId:1355, commentsQuantity: 5},
//      {postId:5131, commentsQuantity: 13},
//      {postId:6134, commentsQuantity: 2}
//  ]

//  const findSinglePost = (postId, posts) => 
//  posts.find(post => post.postId === postId)

//  console.log(findSinglePost(6134, posts)) //6134 object
//  console.log(findSinglePost(4444, posts)) //undefined

 // 🌳 every()  // return true if elements have all property 
 // 🌳 some() //find at least one instance of true


//  //✨ example 1:
//  const myNumbers = [3,-5,1,10,-7];
//  const isPositive = element => 
//     typeof element === 'number' && element > 0;

// const positiveCheck = myNumbers.every(isPositive);

// console.log(positiveCheck) //false

// const somepositiveCheck = myNumbers.some(isPositive);

// console.log(somepositiveCheck) //true

//✨ example 2:
const items = [
    {
        title: "computer",
        quantity: 10
    },
    {
        title: "phone",
        quantity: 2
    },
    {
        title: "headphones",
        quantity: 0
    },
];

// all items have quantity > 5
if (items.every(item => item.quantity > 5))
console.log("all items available") //nothing consoled

// all items have quantity > 0 and some are <= 5
if (items.every(item => item.quantity > 0) &&
items.some(item => item.quantity <=5))
console.log("all items may be sold soon") // console appears

// all items have quantity > 5
if (items.some(item => item.quantity ===0 ))
console.log("some items sold out") //nothing consoled