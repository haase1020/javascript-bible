// //✔️ ⏱️ 💻 😉 🌳 📗 💯 ✨

//  🌳 reduce()
const nuNumbers = [5,10,3,15];

const sum = arrayOfNumbers => arrayOfNumbers.reduce(
    (accumulator, number) => {
        console.log("accumulator is " + accumulator + " and number is " + number)
        return accumulator + number}, 0)

console.log(sum(myNumbers));