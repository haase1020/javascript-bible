// ✔️ ⏱️ 💻 😉 🌳 📗 💯 ✨

// // 🌳 object literal
// let myObject =  {
//     prop1: 10,
//     prop2: "string",
//     prop3: function() {
//         console.log(this.prop1, this.prop2)
//     }
// }

// // 🌳 enhanced object literals
// // 📗 example 1: shorthand property names
// const num = 10;
// const str = "hello world";
// const bool = true;

// const myObject = {
//     num,
//     str,
//     bool,
//     //missingVar //uncaught ReferenceError: missingVar is not defined
// };


// // 📗 example 2: shorthand method names
// const myCar = (make, year) => {
//     return {
//         make,
//         year,
//         // info: function(price) {
//         //     // can't use arrow function
//         //     return `${make} costs ${price}`;

//         // can also shorten to following:
//         info(price) {
//             // can't use arrow function
//             return `${make} costs ${price}`;
//         }
//     }
// };

// const newCar = myCar("Tesla", 2020);
// console.log(newCar.info(50000))

// 📗 example 3: computed property names
const BG_COLOR_PROP = "bgColor";
const btn = {
    title: "Button 1",
    [BG_COLOR_PROP]: "blue"
};

const list =  {
    options: ["Option 1", "Option 2"],
    [BG_COLOR_PROP]: "grey"
};

console.log(btn);
console.log(list);








