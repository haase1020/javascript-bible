// ✔️ ⏱️ 💻 😉 🌳 📗 💯 ✨

// // 🌳 object literal
// let myObject =  {
//     prop1: 10,
//     prop2: "string",
//     prop3: function() {
//         console.log(this.prop1, this.prop2)
//     }
// }

// // 🌳 enhanced object literals
// // 📗 example 1: shorthand property names
// const num = 10;
// const str = "hello world";
// const bool = true;

// const myObject = {
//     num,
//     str,
//     bool,
//     //missingVar //uncaught ReferenceError: missingVar is not defined
// };


// // 📗 example 2: shorthand method names
// const myCar = (make, year) => {
//     return {
//         make,
//         year,
//         // info: function(price) {
//         //     // can't use arrow function
//         //     return `${make} costs ${price}`;

//         // can also shorten to following:
//         info(price) {
//             // can't use arrow function
//             return `${make} costs ${price}`;
//         }
//     }
// };

// const newCar = myCar("Tesla", 2020);
// console.log(newCar.info(50000))

// // 📗 example 3: computed property names
// const BG_COLOR_PROP = "bgColor";
// const btn = {
//     title: "Button 1",
//     [BG_COLOR_PROP]: "blue"
// };

// const list =  {
//     options: ["Option 1", "Option 2"],
//     [BG_COLOR_PROP]: "grey"
// };

// console.log(btn);
// console.log(list);

// 💯 challege: 6-1
/*
Modify object that is returned by "photoGallery" function using:
1. Shorthand property names
2. Shorthand method names
3. Computed property names. You need to add one computed property.
Also correct all mistakes.
Log messages in the console must be exactly the same as at the end of this challenge.
*/

const photoGallery = (title, dimensions, date) => {
    return {
      title,
      dimensions,
      date,
      [dimensions]: true,
      info() {
        console.log(
          `Dimensions of the foto "${title}" are ${dimensions}`
        );
      },
      publishInfo() {
        console.log(
          `Foto "${title}" was published ${Math.floor(
            (new Date().getTime() - date.getTime()) / 1000
          )} seconds ago`
        );
     },
    };
  };
  
  const photo1 = photoGallery(
    "My dog",
    "1920x1080",
    new Date()
  );
  
  const testDimension1 = "1920x1080";
  const testDimension2 = "1080x720";
  
  photo1.info();
  /* Dimensions of the foto "My dog" are 1920x1080 */
  
  setTimeout(() => photo1.publishInfo(), 2000);
  /* Foto "My dog" was published 2 seconds ago */
  
  /* QUESTION: Why "publishInfo" method still has access to the parameters (for example "date") of the "photoGallery" function? */
  
  console.log(photo1[testDimension1]); // true
  console.log(photo1[testDimension2]); // undefined





