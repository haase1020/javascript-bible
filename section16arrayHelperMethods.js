// //✔️ ⏱️ 💻 😉 🌳 📗 💯 ✨


// 🌳 For each 
const myArray = [1,true, "abc"]

myArray.forEach((i) => {
    console.log(i)
})

const myCities = ["London", "Tokyo", "Osaka"]

const arrayInfo = (element, index) => {
    console.log(element + " is located at the index " + index + " in the array")
};

myCities.forEach((element, index) => {
    console.log(arrayInfo(element, index))
})

// 🌳 map