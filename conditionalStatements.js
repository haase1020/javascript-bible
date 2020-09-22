/*
if, if else, switch, ternary operator
*/

/*
if:
*/
let val = 10;
if (val > 5) {
  val += 20;
}
console.log(val); //30

/*
if else
*/
if (val < 5) {
  val += 20;
} else {
  val -= 20;
}
console.log(val); //10

/*
switch
*/
let month = 2;
switch (month) {
  case 1:
    console.log('December');
    break;
  case 2:
    console.log('January');
    break;
  case 3:
    console.log('February');
    break;
  default:
    console.log('not the winter');
}

/*
ternary operator
*/
