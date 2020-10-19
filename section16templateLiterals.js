// // //✔️ ⏱️ 💻 😉 🌳 📗 💯 ✨
// 📗 pre-ES6 - template strings
const myNum = 10;
const myStr = "hi";
const myArr = [1,2];
const myObj = {x:10};
const myBool = true;
const templateStr = "number is " + myNum + " and string is "+ myStr +
" and array is " +
myArr +
" and object is " +
myObj + 
" myBoolean is " + myBool

console.log(templateStr)

//  📗 ES6 -template literals

const templateLiteral = `number is ${myNum} and string is ${myStr} and
my ternary operator is ${myBool ? 15 : "world"}`

console.log(templateLiteral)

//  📗 with template literal can create html elements
const btn = "Button is here"
const myButton = `
<div>
    <button>${btn} </button>
</div>
`;
document.body.innerHTML = myButton