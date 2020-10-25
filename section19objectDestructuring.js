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

// // 📗 example 7: non-existing properties
// const myObj = {
//     a: 10,
//     b: true,
    
// };
// const { a,b,c } = myObj
// console.log(a,b,c); //c is undefined

//  // 📗 example 8: default values
//  const myObj = {
//     a: 10,
//     b: true,
    
// };
// const { a,b,c = "default val" } = myObj
// console.log(a,b,c); //c has "default value"

//  // 📗 example 9: default values and new variable names

//  const myObj = {
//     a: 10,
//     b: true
// };

// const { 
//     a:newA, b: newB, c: newC = "default val"
// } =myObj;
// console.log(newA,newB,newC)

// // 📗 example 10: next object destructuring
// const myObj=  {
//     a: 1,
//     b: 2,
//     nestedObject: {
//         c: 3,
//         d: 4
//     }
// };

// const {a: a, b: b, nestedObject: { c: c, d: d}} = myObj;
// // const { c: c, d: d} = nestedObject;
// console.log(a,b,c,d)

// 💯 challenge 6-4
/*
Modify "personInfo" function to match console.log output at the end of the challenge.
Object that is returned by "personInfo" function must contain only shorthand property names.
*/

// const personInfo = ({
//     name, //shorthand since same name 
//     age: personAge, 
//     location:{country: origin, city: homeCity}, 
//     friendsQty= 0, 
//     recordCreatedAt = new Date().getFullYear()
// }) => {
//    return {name, personAge, origin, homeCity, friendsQty, recordCreatedAt
//    }
//   };
  
//   const person = {
//     name: "Alice",
//     age: 19,
//     location: {
//       country: "England",
//       city: "London"
//     }
//   };
  
//   console.log(personInfo(person));
//   /*
//   {
//     name: "Alice",
//     personAge: 19,
//     origin: "England",
//     homeCity: "London",
//     friendsQty: 0,
//     recordCreatedAt: *current year*
//   }
//   */


// 💯 challenge 6-5
/*
Create "processPosts" function that will return new array of posts.
Notice that some propery names in each post are modified and each postId is incremented by 1000.
Original array of posts should not be mutated.
*/

const posts = [
    {
      postId: 234,
      author: "robd",
      commentsQty: 5
    },
    {
      postId: 823,
      author: "sady"
    },
    {
      postId: 161,
      author: "merryl",
      commentsQty: 8
    }
  ];

  const processPosts = posts => {
      return posts.map(({postId,author: postAuthor, commentsQty: postCommentsQty = 0}) => ({
          postAuthor,
          postCommentsQty,
          postId: postId + 1000
      }))
  }
  
  console.log(processPosts(posts));
  /*
  [
    {
      postId: 1234,
      postAuthor: "robd",
      postCommentsQty: 5
    },
    {
      postId: 1823,
      postAuthor: "sady",
      postCommentsQty: 0
    },
    {
      postId: 1161,
      postAuthor: "merryl",
      postCommentsQty: 8
    }
  ]
  */
  
  console.log(posts); // original array of posts