// ✔️ ⏱️ 💻 😉  📗🌳 💯 ✨

// // 📗 example 1: declare and assign using obj desctucturing
// const myObj = {
//     a: 10,
//     b: true
// };
// // const a = myObj.a;
// // const b = myObj.b;


// // left side is values from myObj, right is initializing and assigning
// // to const a and const b
// const { a:a, b: b} =myObj;
// console.log(a,b)


// // 📗 example 2: declare and assign using obj desctucturing and shorthand property names
// const myObj = {
//     a: 10,
//     b: true
// };

// const { a, b} =myObj;
// console.log(a,b)

// // 📗 example 3: assign using obj desctucturing and shorthand property names
// const myObj = {
//     a: 10,
//     b: true
// };
// let a,b;
// ({ a, b} = myObj); // need parenthesis here
// console.log(a,b)

// const anotherObj = {
//     a: 20,
//     b: 30
// };
// ({a,b} = anotherObj); //reassign values of a and b

// console.log(a,b)

// // 📗 example 4: destructure non-object value
// // const { a,b } = null; //uncaught typeerror
// const val = undefined;
// const { a,b } = val ||{}
// console.log(a,b);
// const myArray =[1,2];
// const { c,d } = myArray;
// console.log(c,d); // 2 undefined


// 📗 example 5: change order of the properties
// const myObj = {
//     a: 10,
//     b: true
// };

// const { b, a} =myObj; //order is not important
// console.log(a,b)


// // 📗 example 6: rest operator in object desctructuring
// const myObj = {
//     a: 10,
//     b: true,
//     c:[],
//     d: "hi",
//     e: 20
// };

// Object.prototype.newProp = 1; //this will show on prototype on myObj

// const { a, d, ...rest } =myObj; //rest operator must be last item in list
// console.log(a,d, rest)

// 📗 example 7: non-existing properties
const myObj = {
    a: 10,
    b: true,
    
};
const { a,b,c } = myObj
console.log(a,b,c); //c is undefined