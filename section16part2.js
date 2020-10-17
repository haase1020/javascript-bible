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


// // 💯 challenge 3-9: reduce array of objects
// const posts = [
//     {
//       title: "How to find JavaScript developer job?",
//       postId: 3421,
//       comments: 25
//     },
//     {
//       title: "Is it hard to learn ES6?",
//       postId: 5216,
//       comments: 3
//     },
//     {
//       title: "Should I learn React or Angular?",
//       postId: 8135,
//       comments: 12
//     }
//   ];
  
//   const minimalComentsQty = 10;
  
//   /* Create a function "popularPostsIds" with two parameters "posts" and "minimalComentsQty".
//   This function "popularPostsIds" should return an array of postIds of posts that have quantity of "comments" at least equal to "minimalComentsQty"
//   */
//   const popularPostsIds = (posts, minimalComentsQty) =>
//     posts.reduce((postsIds, post) => {
//       if (post.comments >= minimalComentsQty)
//         postsIds.push(post.postId);
//       return postsIds;
//     }, []);
  
//   console.log(popularPostsIds(posts, minimalComentsQty)); // [3421, 8135]



// 💯 challenge 3-10: reduce to object
const products = [
    {
      title: "Phone case",
      price: 23,
      quantity: 2,
      category: "Accessories"
    },
    {
      title: "Android phone",
      price: 150,
      quantity: 1,
      category: "Phones"
    },
    {
      title: "Headphones",
      price: 78,
      quantity: 1,
      category: "Accessories"
    },
    {
      title: "Sport Watch",
      price: 55,
      quantity: 2,
      category: "Watches"
    }
  ];
  
  /* Create a function "quantityByCategories" with one parameter "products".
  This function "quantityByCategories" should return an object with keys equal to categories and values equal to sum of all quantities in each category.
  */
  const quantityByCategories = products =>
    products.reduce((counts, product) => {
      // console.log(
      //   "Counts is " +
      //     JSON.stringify(counts) +
      //     " and product is " +
      //     JSON.stringify(product)
      // );
      counts[product.category] =
        (counts[product.category] || 0) + product.quantity;
      return counts;
    }, {});
  
  console.log(quantityByCategories(products));
  /* {
    Accessories: 3,
    Phones: 1,
    Watches: 2
  } */