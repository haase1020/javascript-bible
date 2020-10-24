// ✔️ ⏱️ 💻 😉  📗🌳 💯 ✨

// 📗 example 1: declaration and assignment using array desctructuring
// const myArray = [1,2,3,4]
// let [a, b, c, d] =  myArray

// console.log(a,b,c,d)

// // 📗 example 2: assignment using array destructuring
// const myArray = [1,2,3];
// let a,b,c;

// [a, b, c] =  myArray;

// const anotherArray = [4,5,6];
// [a,b,c] = anotherArray;
// console.log(a,b,c)

// // 📗 example 3: more variables than elements in array

// const myArray = ["a", "b"];
// const [a,b,c] = myArray;
// console.log(a,b,c) // c is undefined

//  // 📗 example 4: default values
//  const myArray = ["a"];
// const [a,b,c="c"] = myArray;
// console.log(a,b,c)  //b is undefined, c is "c"

// // 📗 example 5: skip element during destructuring
// const myArray = [1,2,3,4,5];
// const [,,a,,b] = myArray; //how to skip items
// console.log(a,b)

// // 📗 example 6: rest operator in array descturing
// const myArray = [1,2,3,4,5];
// const [a,b,...c] = myArray; //rest operator
// console.log(a,b,c);
// const d = [...c];  //this is spread operator since on right side and alredy has value
// // d is a copy of c

// // 📗 example 7: delete first element
// let myArray = [1,2,3];
// const [, ...anotherArray] = myArray;
// console.log(anotherArray) //doesn't have first item
// console.log(myArray)

// // 📗 example 8: swap values
// let x = 5,
// y = 10;
// [y,x] = [x,y]
// console.log(x,y)

// // 📗 example 9: destructuring in the function
// const myPosts = [
//     ["post 1", 10],
//     ["post 2", 20]
// ];

// myPosts.forEach(([title, likes]) => 
// console.log(`${title} has ${likes} likes`)
// );

// // 📗 example 10: nested array destructuring
// const myArray = [1,2,[3,4]];
// const [a,b,[c,d]] = myArray;
// console.log(a,b,c,d);


//💯 challenge 6-2
/*
Modify parameters section in the "processQuantities" function to match console.log outputs
*/

const processQuantities = ([minQty,maxQty, defaultQty=0]) => {
    console.log(minQty); // 8
    console.log(maxQty); // 29
    console.log(defaultQty); // 0
    return maxQty - minQty; // returns 21
  };
  
  const qtyRange = [8, 29];
  
  console.log(processQuantities(qtyRange));