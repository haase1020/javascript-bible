// array: an object with numeric property names
// array literal notation  const myArray = [1,2,3];
// const myArray2 = new Array(1,2,3);

const myArray = [1, 2, 3, 4];
console.log(myArray[0]); //1  --> can't use dot notation
console.log(myArray.length); //4
myArray[2] = 'abc';
console.log(myArray); // [1,2,'abc',4]
myArray[4] = 'hi';
console.log(myarray.length); //5

// Array methods****************************
// Push
const myArray1 = [1, 2, 3];
myArray1.push(4); // [1,2,3,4]

// Pop
myArray1.pop(); //[1,2,3]
const removed = myArray1.pop(); //3

// Shift
const myArray2 = [1, 2, 3, 4];
myArray2.shift(); // [2,3,4]
delete myArray2[1]; //index 1 will now return 'empty'

// Unshift --> Push method is better
const myArray3 = [1, 2, 3, 4];
myArray3.unshift(0); //[0,1,2,3,4]

// '===' compares type AND value (in array case, the pointer)
console.log(myArray2 === myArray3); // false because different pointers
console.log(myArray2.toString() === myArray3.toString()); //true because now comparing primitive type "string" //only if order is same
