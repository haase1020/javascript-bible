// // //✔️ ⏱️ 💻 😉 🌳 📗 💯 ✨

// //  🌳 reduce()

// //  📗 EXAMPLE 1 : sum numbers
// const myNumbers = [5,10,3,15];

// const sum = arrayOfNumbers => arrayOfNumbers.reduce(
//     (accumulator, number) => {
//         console.log("accumulator is " + accumulator + " and number is " + number)
//         return accumulator + number}, 0) // 0 stipulates 0 index, otherwise starts at 1 index

// console.log(sum(myNumbers));

// //  📗 EXAMPLE 2: reduce array of object to single array

// const persons = [
//     {
//         name: "John",
//        age: 2 
//     },
//     {
//         name: "Jill",
//        age: 3 
//     },
//     {
//         name: "Jack",
//        age: 3 
//     }
// ]

// const personNames = arrayOfPersons => 
// arrayOfPersons.reduce((names, person) => {
// names.push(person.name);
// console.log(names, person)
// return names;
// },[])

// console.log(personNames(persons))

//  📗 EXAMPLE 3: remove duplicates
const fruits = ["banana", "orange", "apple", "apple",
"banana", "mango","kiwi"
]

const uniqueFruits = arrayOfFruits =>
arrayOfFruits.reduce((uniqueElements, fruit) => {
    if (!uniqueElements.includes(fruit))
    uniqueElements.push(fruit);
    return uniqueElements
},[])

console.log(uniqueFruits(fruits))