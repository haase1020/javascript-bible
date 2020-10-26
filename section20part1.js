// ✔️ ⏱️ 💻 😉  📗🌳 💯 ✨

// 🌳 programming language types
/*
class based: C++, Java
protype-based: JavaScript, ES6 introduced classes (syntactic sugar)
*/

/*🌳 each object in JS has Prototype
[[Prototype]] --> internal hidden property of each object
__proto__ --> visible property of each object | proto can be either object or null | getter/setter for hidden property [[Prototype]]
*/

/*🌳 what is Prototype?
Object.prototype --> top-level prototype ✨Object is a function✨
✨ Object.prototype.__proto__ = null ✨
Object.prototype --> object | ✨includes constructor function✨
*/

/*🌳 native prototypes
object, array, function, data, string,
number, boolean, regexp, promise, map, set, error
✨ arrow functions do not have prototype method
✨ every function is an instance for Function.prototype 
✨ every fn in JS (except arrow fns) is a constructor fn
*/

// // 📗 example 1: function constructor example
// //function constructor starts capital letter
// function CivilPlane() {}

// console.log(CivilPlane.prototype) // {constructor: ƒ}
// console.log(CivilPlane.prototype.constructor === CivilPlane); //true
// console.log(CivilPlane.prototype.__proto__ === Object.prototype);// true
// console.log(CivilPlane.prototype.__proto__.__proto__ === null);// true
// /*
// each fn in JS (not arrow) has .prototype property and can be used as a constructor fn
// */

// // 📗 example 2
// function CivilPlane(props) {
//     this.numberOfSeats = props.numberOfSeats
// }
// const propsForSmallPlane = {
//     numberOfSeats: 4
// };

// const smallPlane = new CivilPlane(propsForSmallPlane);
// console.log(smallPlane)


// ✔️FUNCTION CONSTRUCTOR ✔️
/*
1. function constructor is called
2. new empty object is created and "this" is assigned to this new empty object
3. Function constructor automatically adds to this empoty object reference to it's prototype [[Prototype]]
4. Function constructor is exectured and it modifies new object by adding properties to "this"
5. At the end of the function constructor it automatically returns "this" 
that is a new modified instance of the object with reference to it's prototype

function MyFunctionConstructor(props) {
    this.title = props.title;
    this.qty = props.qty
}

const props = {
    title: "test Title",
    qty: 5
}

const newInstance = new MyFunctionConstructor(props);
*/


// // 🌳 Object.create()
// const Parent = {
//     type: "Parent",
//     typeInfo(){
//         console.log(`Hello from ${this.type}`);
//     },
//     modifyType(newType) {
//         this.type = newType;
//     }
// };
// console.log(Parent.type)
// Parent.typeInfo();
// console.log(Parent.prototype);// undefined

// const child = Object.create(Parent);
// console.log(child.__proto__===Parent); //true

// child.type = "Child";
// child.typeInfo();
// child.modifyType("modified child");
// child.typeInfo();


/*
🌳 imperative programming paradigm:🌳
insert new protoype to the prototype chain:
1. created new fn for new prototype
2. reassign value of the "prototype using "Object.create"
3. make "constructor" property equal to the fn itself
4. call "parent" fn if it should add new props to each new instance

*/

/**
 * 💯 CHALLENGE 7-1
 *
 * Insert new prototype "Vehicle.prototype" to the existing prototype chain
 *
 * CURRENT CHAIN
 * CivilPlane.prototype > Airplane.prototype
 * > Object.protoype
 *
 * UPDATED CHAIN
 * CivilPlane.prototype > Airplane.prototype
 * > Vehicle.prototype > Object.protoype
 *
 * Vehicle.prototype should set two additional
 * properties:
 * 1. maxSpeed
 * 2. weight
 *
 * It should also contain method "vehicleInfo"
 * available for any object down the prototype chain
 */

function Vehicle(props) {
    this.maxSpeed = props.maxSpeed;
    this.weight = props.weight;
  }
  
  Vehicle.prototype.vehicleInfo = function() {
    console.log(
      `Max speed of the vehicle is ${
        this.maxSpeed
      } and weight is ${this.weight}`
    );
  };
  
  function Airplane(props) {
    Vehicle.call(this, props);
    this.wingspan = props.wingspan;
    this.maxRangeOfFlight = props.maxRangeOfFlight;
  }
  
  Airplane.prototype = Object.create(Vehicle.prototype);
  
  Airplane.prototype.constructor = Airplane;
  
  Airplane.prototype.airplaneInfo = function() {
    console.log(
      `Wingspan of the airplane is ${
        this.wingspan
      } and maximal range of flight is ${
        this.maxRangeOfFlight
      }`
    );
  };
  
  function CivilPlane(props) {
    Airplane.call(this, props);
    this.numberOfSeats = props.numberOfSeats;
  }
  
  CivilPlane.prototype = Object.create(Airplane.prototype);
  
  CivilPlane.prototype.constructor = CivilPlane;
  
  CivilPlane.prototype.seatsInfo = function() {
    console.log(this); // instance of the prototype
    console.log(
      `Number of seats in the plane is ${this.numberOfSeats}`
    );
  };
  
  CivilPlane.prototype.modifySeatsNumber = function(
    newSeatsQty
  ) {
    this.numberOfSeats = newSeatsQty;
  };
  
  const propsForSmallPlane = {
    numberOfSeats: 4,
    wingspan: 20,
    maxRangeOfFlight: 1000,
    maxSpeed: 800,
    weight: 15
  };
  
  const smallPlane = new CivilPlane(propsForSmallPlane);
  
  const propsForLargePlane = {
    numberOfSeats: 250,
    wingspan: 60,
    maxRangeOfFlight: 3500,
    maxSpeed: 900,
    weight: 40
  };
  
  const largePlane = new CivilPlane(propsForLargePlane);
  
  /**
   * VERIFICATION
   */
  smallPlane.vehicleInfo(); // Max speed of the vehicle is 800 and weight is 15
  
  largePlane.vehicleInfo(); // Max speed of the vehicle is 900 and weight is 40
  