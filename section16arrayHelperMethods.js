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
// const items = [
//     {
//         title: "computer",
//         quantity: 10
//     },
//     {
//         title: "phone",
//         quantity: 2
//     },
//     {
//         title: "headphones",
//         quantity: 0
//     },
// ];

// // all items have quantity > 5
// if (items.every(item => item.quantity > 5))
// console.log("all items available") //nothing consoled

// // all items have quantity > 0 and some are <= 5
// if (items.every(item => item.quantity > 0) &&
// items.some(item => item.quantity <=5))
// console.log("all items may be sold soon") // console appears

// // all items have quantity > 5
// if (items.some(item => item.quantity ===0 ))
// console.log("some items sold out") //nothing consoled

// // 💯 challenge 3-4: array of numbers sorted?
// const a = [5, "abc", 10, 1];
// const b = [4, 10, 14, 25, 25, 50];
// const c = [150, 132, 80, 40];
// const d = [15, 26, 10, 23, 85];

// /*
// Create a function "arrayCheck" with one parameter - "inputArray".
// If at least one element in the array is not a number - return "Some elements are not numbers".
// If numbers in the array are sorted in ascending order - return "Array is sorted is ascending order".
// If numbers in the array are sorted in descending order - return "Array is sorted is descending order".
// If array is not sorted - return "Array is not sorted"
// */

// const arrayCheck = (inputArray) => {
//     if(inputArray.some(element => typeof element !=="number")) {
//        return "some elements are not numbers";
// }
// if (inputArray.every((element, index, array) => index > 0 ? element >= array[index -1] : true)) {
//     return "array sorted in ascending order"
// }
// if (inputArray.every((element, index, array) => index > 0 ? element <= array[index - 1] : true)) {
//     return "array sorted in descending order"
// } 
//     return "array is not sorted"
// };



// console.log(arrayCheck(a)); // Some elements are not numbers
// console.log(arrayCheck(b)); // Array is sorted is ascending order
// console.log(arrayCheck(c)); // Array is sorted is descending order
// console.log(arrayCheck(d)); // Array is not sorted



// // 💯 challenge 3-5: are arrays equal or not?

// const a = [1, 2, 3];
// const b = [1, 2, 3];



// /* Create a function "arraysAreEqual" with two parameters "arrayOne" and "arrayTwo". 
// If two arrays are equal (have same quantity of the elements and all elements match e.g. arrayOne[0] === arrayTwo[0] etc.) return "true".
// Otherwise return "false". */

// const arraysAreEqual = (arrayOne, arrayTwo) =>
//   arrayOne.length === arrayTwo.length &&
//   arrayOne.every(
//     (element, index) => element === arrayTwo[index]
//   );

// const c = [2, 1, 3];
// const d = [1, 2, 3, 4];

// console.log("_____________________")

// console.log(arraysAreEqual(a, b)); // true
// console.log(arraysAreEqual(a, c)); // false
// console.log(arraysAreEqual(a, d)); // false

// // 💯 challenge 3-6: check if element is in array?

// const transport = ["Bus", "Car", "Bicycle", "Airplane"];

// /* Create a function "elementFound" with two parameters "inputArray" and "searchElement".
// If "searchElement" is found in the "inputArray" - return "true".
// Otherwise return "false"
// Hint: Use "some" helper method to solve this
// */

// const elementFound = (inputArray, searchElement) =>
//   inputArray.some(element => element === searchElement);

// console.log(elementFound(transport, "Bus")); // true
// console.log(elementFound(transport, "Phone")); // false
// console.log(elementFound(transport, "Airplane")); // true


// // 🌳 includes()

// const myArray = [10, 'hi', true, undefined, null, [1,2], {}];

// console.log(myArray.includes(true))
// console.log(myArray.includes('hi', 0))// false since 'hi' is index 1
// console.log(myArray.includes([1,2])) //returns false since this is a pointer
// console.log(myArray.includes({})) //returns false since this is a pointer

// 💯 challenge 3-7: includes() with Array or Object
const tags = [
  ["javascript", "es6"],
  ["css", "flexbox"],
  ["html", "web-browser"]
];

const fruits = [
  { title: "Orange", quantity: 10 },
  { title: "Banana", quantity: 5 },
  { title: "Apple", quantity: 25 }
];

const primitiveTypesArray = [
  25,
  "x",
  true,
  undefined,
  null
];

/* Create a function "elementIsIncluded" with two parameters "searchElement" and "array". 
If type of the "searchElement" is object or array, you need to convert each element in the "array" to the string and then apply "includes" method with argument that will be also converted to the string.
If type of the "searchElement" is not an object or array - simply apply "includes" method and return result
*/

const elementIsIncluded = (searchElement, array) => {
  if (typeof searchElement !== "object") {
    return array.includes(searchElement);
  }

  if (typeof searchElement === "object") {
    return array
      .map(element => JSON.stringify(element))
      .includes(JSON.stringify(searchElement));
  }
};

console.log(elementIsIncluded(["css", "flexbox"], tags)); // true

console.log(elementIsIncluded(["flexbox", "css"], tags)); // false

console.log(
  elementIsIncluded(
    { title: "Apple", quantity: 25 },
    fruits
  )
); // true

console.log(elementIsIncluded({ title: "Banana" }, fruits)); // false

console.log(elementIsIncluded(25, primitiveTypesArray)); // true