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
