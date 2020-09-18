// object is a function

//left side is property and right side is property value
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
