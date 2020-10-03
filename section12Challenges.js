// //callbacks, events, events queue and execution contexts stack
// function waitingFn(timeinMs) {
//   const futureTime = Date.now() + timeinMs;

//   while (futureTime > Date.now()) {
//     //waiting...
//   }
// }
// waitingFn(5000);

// setTimeout(() => console.log('callback executed'), 2000);

// console.log('function call has just ended');

//closures
function outerFn(mult) {
  const a = 10;
  console.log('mult in outerFn', mult);
  function innerFn(b) {
    console.log('b in inner function', b);
    console.dir(innerFn);
    return (a + b) * mult;
  }

  return innerFn;
}

const res1 = outerFn(2);
console.log(res1(10));

const res2 = outerFn(3);
console.log(res2(20));
