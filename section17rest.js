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


// ✔️ reular function
function sumNumbers(...nums){
    //option 1 = - rest parameter
    console.log(nums); //array
    console.log(arguments) //this is now an object, so much convert to array
    return nums
    .filter(num => typeof num === "number")
    .reduce((sum,num) => sum + num, 0)
};

console.log(sumNumbers("abc",1,2,3,4,5,6,7))