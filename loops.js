// // //for loop
// // //for (initial statement; condition; iteration action) {
// // //block of statements
// // // }
// // //avoid using "for" loop with arrays!!!******

// // // while loop
// // // initial value (ex. let i = 0; )
// // //while (condition {
// // // code executed on each iteration
// // //})

// // //do {
// // // code that is executed on each iteration
// // //} while (condition)
// // let i = 10;
// // do {
// //   console.log(i);
// //   i++;
// // } while (i < 5);

// // // for in and for of loops**************************
// // // recommend forEach, map, reduce for arrays
// // // use for in for objects!!
// // //for (key in object){
// // //actions with key
// // // spcifid property value can be accessed as object[key]
// // //}
// // const myObject = {
// //   x: 10,
// //   y: true,
// //   z: 'abc',
// // };
// // for (let key in myObject) {
// //   console.log(key, myObject[key]);
// // }

// // // array
// // const myArray = [true, 10, 'abc', null];
// // for (let key in myArray) {
// //   console.log(myArray[key]);
// // }

// // // for of loop*******************************************
// // // can't be used with objects!!!
// // //for (element of iterable){
// // // actions with specific element
// // //}
// // const myArray2 = ['hi', 'there', 'you', 'are', 'doing', 'great!'];
// // for (let element of myArray2) {
// //   console.log(element);
// // }

// // // for of with objects********************************

// // // // won't work --> typeerror myObject2 is not iterable
// // // let myObject2 = {
// // //   x: 'good',
// // //   y: 'morning',
// // //   z: 'today',
// // // };
// // // for (let prop of myObject2) {
// // //   console.log(prop);
// // // }

// /**
//  * EXAMPLE 1
//  * Regular for loop
//  * */
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// /**
//  * EXAMPLE 2
//  * Regular for loop with arrays
//  * NEVER USE THIS KIND OF LOOP WITH ARRAYS
//  * */
// const myArray = ['hi', 'there', 'keep up the awesome work!'];

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// /**
//  * EXAMPLE 3
//  * While loop
//  * */
// let i = 0;
// while (i > -5) {
//   console.log(i);
//   i--;
// } // no semicolon needed after statement here

// /**
//  * EXAMPLE 5
//  * For in loop with objects
//  * */
// // let a = 0;
// // do {
// //   console.log(a);
// //   a++;
// // } while (a < 10);

// const myObject = {
//   a: 'it is',
//   b: 'a good day',
//   c: 'to do good!',
// };

// for (let key in myObject) {
//   console.log(myObject[key]);
// }

// /**
//  * EXAMPLE 6
//  * FOr in loops with objects with inherited properties
//  * */
// // let a = 0;
// // do {
// //   console.log(a);
// //   a++;
// // } while (a < 10);

// const myObject = {
//   a: 'it is',
//   b: 'a good day',
//   c: 'to do good!',
// };
// Object.prototype.globalProp = 'inherited property';

// for (let key in myObject) {
//   console.log(myObject[key]);
// }

// /*
// Example 7
// For in loop with arrays --> not a great option (use for of is better)
// */
// const myArray = ['work', 'is', 'a', 'blessing'];
// for (let key in myArray) {
//   console.log(key, myArray[key]);
// }

/*
EXAMPLE 8 For of Loop with Arrays
*/
const persons = [
  {
    name: 'Jon',
    greeting: 'hi',
  },
  {
    name: 'Caleb',
    greeting: 'hello',
  },
  {
    name: 'Hope',
    greeting: 'hey',
  },
];

for (let person of persons) {
  console.log(person.name + ' ' + person.greeting);
}
