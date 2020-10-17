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

// //  📗 EXAMPLE 3: remove duplicates
// const fruits = ["banana", "orange", "apple", "apple",
// "banana", "mango","kiwi"
// ]

// const uniqueFruits = arrayOfFruits =>
// arrayOfFruits.reduce((uniqueElements, fruit) => {
//     if (!uniqueElements.includes(fruit))
//     uniqueElements.push(fruit);
//     return uniqueElements
// },[])

// console.log(uniqueFruits(fruits))


// 💯 challenge 3-9: reduce array of objects
const posts = [
    {
      title: "How to find JavaScript developer job?",
      postId: 3421,
      comments: 25
    },
    {
      title: "Is it hard to learn ES6?",
      postId: 5216,
      comments: 3
    },
    {
      title: "Should I learn React or Angular?",
      postId: 8135,
      comments: 12
    }
  ];
  
  const minimalComentsQty = 10;
  
  /* Create a function "popularPostsIds" with two parameters "posts" and "minimalComentsQty".
  This function "popularPostsIds" should return an array of postIds of posts that have quantity of "comments" at least equal to "minimalComentsQty"
  */
  const popularPostsIds = (posts, minimalComentsQty) =>
    posts.reduce((postsIds, post) => {
      if (post.comments >= minimalComentsQty)
        postsIds.push(post.postId);
      return postsIds;
    }, []);
  
  console.log(popularPostsIds(posts, minimalComentsQty)); // [3421, 8135]