// // //✔️ ⏱️ 💻 😉 🌳 📗 💯 ✨
// // 📗 pre-ES6 - template strings
// const myNum = 10;
// const myStr = "hi";
// const myArr = [1,2];
// const myObj = {x:10};
// const myBool = true;
// const templateStr = "number is " + myNum + " and string is "+ myStr +
// " and array is " +
// myArr +
// " and object is " +
// myObj + 
// " myBoolean is " + myBool

// console.log(templateStr)

// //  📗 ES6 -template literals

// const templateLiteral = `number is ${myNum} and string is ${myStr} and
// my ternary operator is ${myBool ? 15 : "world"}`

// console.log(templateLiteral)

// //  📗 with template literal can create html elements
// const btn = "Button is here"
// const myButton = `
// <div>
//     <button>${btn} </button>
// </div>
// `;
// document.body.innerHTML = myButton

// 💯 challenge 4-2: default tagged template

/* Create a function "taggedTemplate" that will return a regular string (not template literal).
Use appropriate method of the function definition and needed amount of arguments.
Use all knowledge gained in the previous sections.
*/
function taggedTemplate(arrayOfStrings) {
    const vals = Array.from(arguments).slice(1)
    // console.log({arrayOfStrings})
    // console.log(vals)
    return arrayOfStrings.reduce((concatStr, str, index) => {
        return concatStr + str + (vals[index] !== undefined ? vals[index] : "");
    },"")
}
// FIRST test case
const a = 10;
const b = 5;
const sum = taggedTemplate`Sum of the two variables a(${a}) and b(${b}) is ${a +
  b}`;

console.log(sum);

// SECOND test case
const girl = "Alice";
const boy = "Bob";
const friendsInfo = taggedTemplate`${girl} and ${boy} are friends!`;

console.log(friendsInfo);

