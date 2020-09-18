// object is a function

//left side is property and right side is property value

// EXERCISE 1*****************************
const myCity = {
  city: 'Alexandria',
  popular: true,
  state: 'Virginia',
};

console.log(myCity.city); // dot notation

myCity.city = 'Seattle';
console.log(myCity.city);

myHobbies = {
  sports: 'walking',
};

myHobbies.learning = 'reading books';

console.log(myHobbies);

delete myHobbies.learning;

console.log(myHobbies);

// EXERCISE 2*****************************
const myFamily = {
  mom: 'ruth',
  husband: 'jon',
};

//bracket notation
console.log(myFamily['mom']);
const familySon = 'son';
myFamily[familySon] = 'caleb';
console.log(myFamily);

//accessing nested properties
const myLocation = {
  city: 'alexandria',
  info: {
    popular: true,
    country: 'US',
  },
};

console.log(myLocation.info.popular); //true

delete myLocation.info['popular'];
console.log(myLocation);

// EXERCISE 3*****************************
myObject = {
  a: '10',
  b: null,
  c: 'blah',
};

const propertyName = 'a';
console.log('myObject a', myObject[propertyName]); // returns 10 from myObject a key
console.log('myObject a will not display', myObject['propertyName']); //undefined

myObject['new' + 'Property' + 'Name'] =
  'Value for dynamically computed property name';

console.log(myObject);

///EXAMPLE 4 --> missing properties*****************************
const myObject2 = {
  a: 3,
  b: true,
};

console.log(myObject2.c); //undefined
// console.log(nonDeclaredVar); //uncaught reference error - not defined
myObject2.newPropertyWithUndefinedValue = undefined; //don't do this!!use null instead

console.log(
  'myObject2 new property: ',
  myObject2.newPropertyWithUndefinedValue
);

// EXAMPLE 5
const objectWithNestedObject = {};
objectWithNestedObject.nestedObject = {};
objectWithNestedObject.nestedObject.a = null;
objectWithNestedObject.nestedObject['b'] = true;
const newPropName = 'c';
objectWithNestedObject.nestedObject[newPropName] = 'hello';

console.log(objectWithNestedObject);

//GLOBAL OBJECTS: window(web browsers) and global(node.js)
