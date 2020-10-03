//callbacks, events, events queue and execution contexts stack
function waitingFn(timeinMs) {
  const futureTime = Date.now() + timeinMs;

  while (futureTime > Date.now()) {
    //waiting...
  }
}
waitingFn(5000);

setTimeout(() => console.log('callback executed'), 2000);

console.log('function call has just ended');
