// ✔️ ⏱️ 💻 😉 🌳 📗 💯 ✨

//  🌳 rest parameters
// ✔️ anonymous function so arguments parameter not available
// const sumNumbers = (...nums) => {
//     console.log(nums);
//     // console.log(arguments) //Uncaught ReferenceError: arguments is not defined
//     return nums
//     .filter(num => typeof num === "number")
//     .reduce((sum,num) => sum + num, 0)
// };

// console.log(sumNumbers("abc",1,2,3,4,5,6,7))


// // ✔️ regular function
// function sumNumbers(...nums){
//     //option 1 = - rest parameter
//     console.log(nums); //array
//     console.log(arguments) //this is now an object, so much convert to array
//     return nums
//     .filter(num => typeof num === "number")
//     .reduce((sum,num) => sum + num, 0)
// };

// console.log(sumNumbers("abc",1,2,3,4,5,6,7))


//  🌳 spread operator

// // 📗 example 1
// const myGreeting = (name, city, age) => {
//     return `hello from ${name} who is ${age} years old and lives in ${city}`;
// };

// const myPerson = ["Alice", "Boston", 100];
// console.log(myGreeting(...myPerson));

// const anotherPerson = ["NewYork", 200]
// console.log(myGreeting("Bob", ...anotherPerson))

// // 📗 example 2 - concatenate arrays
// const a = [1,2,3];
// const b = [4,5];

// const c = a.concat(b).concat(6);
// console.log(c)

// const d = [...a,...b,6]  //easier to read and same outcome
// console.log(d);

// // 📗 example 3 - create date
// const dateInfo = [2025,5,10];

// const date = new Date(...dateInfo);
// console.log(date)

// // 📗 example 4 - copy array
// const myArray = ["a", 5, [], true];

// const newArray = [...myArray];
// newArray.push(10); //myArray is not mutates
// newArray[2].push(7) //myArray is mutated
// console.log(newArray);

// // 📗 example 5 - copy object (ES2018)
// const myObject = {a:10,b:"c", d:[1,2]};
// const copiedObject = {...myObject };
// copiedObject.a=20; //myObject is not mutated
// copiedObject.d.pop(); //myObject is mutated
// console.log(copiedObject);
// console.log(myObject)


// // 📗 example 6 - spread string

// const myStr = "hello world";

// const letters = [...myStr];
// console.log("letters",letters);
// const oldStyleLetters = myStr.split("");
// console.log(oldStyleLetters)


// //💯 challenge 5-1
// /*
// Create a function "meanScore" that will accept any quantity of the arguments, gather them into single array and return mean value of all arguments rounded to 2 decimal places.
// If at least one element in the gathered array is not a number - throw following error to the console: 
// "Supplied arguments must contain only numbers!"
// Type of the returned value must be a "number".
// HINT: In this Challenge you should use both rest and spread operators.
// */
// const meanScore = (...scores) => {
//     if (scores.every(score => typeof score ==="number")) {
//         ///calculate mean
//         return parseFloat(scores.reduce((avg, score) => {
//             return avg + score/ scores.length;
//         }, 0).toFixed(2)
//         );
//     } else {
//         throw new Error (
//             "args must contain numbers!"
//         )
//     }
// }
// const scores1 = [0, 1.5, 2.5, 3.7];
// const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
// const scores3 = [1.3, 2.5, 1.9];
// const scores4 = ["abc", 1.3, true, 2.5, 1.9];



// console.log(meanScore(...scores1)); // 1.93

// console.log(
//   meanScore(...scores1, ...scores2)
// ); // 2.8

// console.log(
//   meanScore(...scores1, ...scores2, ...scores3)
// ); // 2.59

// // console.log(meanScore(...scores4)); // Supplied arguments must contain only numbers!


// //rest parameter review (collection of all remained elements into an array)
// var myName = ["Marina" , "Magdy" , "Shafiq"] ;
// const [firstName , ...familyName] = myName ;
// console.log(firstName); // Marina ;
// console.log(familyName); // [ "Magdy" , "Shafiq"] ;

// //spread operator review (unpacks collected elements into single elements)
// var myName = ["Marina" , "Magdy" , "Shafiq"];
// var newArr = [...myName ,"FrontEnd" , 24];
// console.log(newArr) ; // ["Marina" , "Magdy" , "Shafiq" , "FrontEnd" , 24 ] ;

//  🌳 default function parameters

// // 📗 example 1
// const multiplier = (num, mult= 2) => {
//     console.log(num, mult);
//     return num * mult;
// };

// console.log(multiplier(10,3));//30
// console.log(multiplier(5)); //10

// // 📗 example 2

// const groceryItem = (title, qty, item ={ title: title, quantity: qty}) => {
//     // item = {}; //function parameters are declared and initialized before entering fn body
//     console.log(title, qty, item);
// };

// groceryItem("Banana", 5);

// // 📗 example 3
// const warning = (title) => {
//     console.log(
//         title !== undefined ? ` title of button is ${title} but color is not set`: `title and color not set`
//     )
//     throw new Error("button needs 2 args - title and color");
// };
// const btn = (title = warning(), color = warning()) => {
//     console.log(title)
//     //
// };

// btn("button 1", "pink")
// btn("button 2")
// btn()


// //💯 challenge 5-2
// // /*
// /* Create a function "weatherForecast" with two parameters "city" and "weather". 
// If second argument is absent, "weather" parameter should get value "Great weather!".
// 1. First solve this WITHOUT default function parameter.
// 2. Comment previous solution and solve same task WITH default function parameter.
// NOTE: Carefully compare your results with test calls results
// */
// //  const weatherForecast = (city, weather) => {
// //     //  weather = weather ||"great weather" //could return different results
// //     weather = 
// //     weather !== undefined ? weather: "great weather!"
// //     return `waether forecast for ${city}: ${weather}`;
// //  };
// const weatherForecast = (city, weather="great weather!") => `Weather forecast for ${city}: ${weather}`
// console.log(weatherForecast("Dubai", "Sunny"));
// // Weather forecast for Dubai: Sunny

// console.log(weatherForecast("London", "Light rain"));
// // Weather forecast for London: Light rain

// console.log(weatherForecast("Paris"));
// // Weather forecast for Paris: Great weather!

// console.log(weatherForecast("Miami", ""));
// // Weather forecast for Miami:

// console.log(weatherForecast("Las Vegas", undefined));
// // Weather forecast for Las Vegas: Great weather!

//💯 challenge 5-3
/*
Create a function "tasksSortedByIds" with two parameters "tasks" and "tasksWithIds".
1. Before performing any actions inside of the function you need to generate unique 4-digit "taskId" for each task where it is missing.

2. At the beginning of the function log to the console quantity of the missing taskIds:
"Quantity of the missing taskIds is 2"
3. Function should return array of tasks sorted by "taskId". All tasks in the sorted array must have "taskId".
NOTE: Original "tasks" array should remain unchanged.
NOTE: Hints down below!
BONUS: Ensure that new unique 4-digit "taskId" is not the same as any "taskId" of the existing tasks.
*/
// ✨generate unique 4-digit number
// 1000 <= number < 10000
// 1000 + Math.floor(Math.random() * 9000)

const generateTasksIds = tasks => {
  let newTaskIds = [];
  return tasks.map(({ ...task}) => {
    if (!task.hasOwnProperty("taskId")) {
      let newTaskId;
      do {
        newTaskId = 1000 + Math.floor(Math.random() * 9000);
      } while (tasks.find(task => task.taskId === newTaskId) || newTaskIds.includes(newTaskId)
      );
      newTaskIds.push(newTaskId);
    }
    return task
  });
};

const tasksSortedByIds = (
  tasks, 
  tasksWithIds = generateTasksIds(tasks)
) => {
  console.log(`qty of the missing taskIds
   is ${tasks.filter(task => !task.hasOwnProperty("taskId")).length}`);
  return tasksWithIds.sort((a,b) => a.taskId - b.taskId);
};

const tasks = [
    { title: "Meeting with John", taskId: 4621 },
    { title: "Visit gym", taskId: 6821 },
    { title: "Buy new phone" },
    { title: "Clean the room", taskId: 2721 },
    { title: "Plan a trip" }
  ];
  
  console.log(
    "Sorted array of tasks with taskIds:",
    tasksSortedByIds(tasks)
  );
  /* 
  Quantity of the missing taskIds is 2
  Sorted array of tasks with taskIds: ...
  */
  
  console.log(
    "Original unsorted array of tasks with missing taskIds:",
    tasks
  );
  /*
  Original unsorted array of tasks with missing taskIds: ...
  */
  
  /* HINTS
  1. Use default value for the second parameter "tasksWithIds". This default value should be a function call - "generateTasksIds()".
  2. "generateTasksIds" function should have one parameter "tasks".
  3. Use .map inside of the "generateTasksIds" to create new array of tasks and return this new array as result of the "generateTasksIds" function call. 
  4. Inside of the callback function for .map call create first copy of the object ("task") to avoid mutation of the "tasks" array.
  5. Generate new "taskId" using following syntax
  Math.floor(1000 + Math.random() * 9000)
  6. BONUS (Ensure that newly generated "taskId" doesn't match "taskId" of any of the existing tasks.
  Use "do-while" loop and generate new "taskId" until it will be absent in other tasks. 
  */