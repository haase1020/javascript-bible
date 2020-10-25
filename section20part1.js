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

// 📗 example 2
function CivilPlane(props) {
    this.numberOfSeats = props.numberOfSeats
}
const propsForSmallPlane = {
    numberOfSeats: 4
};

const smallPlane = new CivilPlane(propsForSmallPlane);
console.log(smallPlane)

