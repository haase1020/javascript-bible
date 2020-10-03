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
  function innerFn(b) {
    console.dir(innerFn);
    return (a + b) * mult;
  }

  return innerFn;
}

const res = outerFn(2);
console.log(res(20));

const res2 = outerFn(3);
console.log(res2(20));
