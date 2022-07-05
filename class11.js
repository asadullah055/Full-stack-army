//==================iterator ============
/* const range = {
  start: 0,
  stop: 105,
  step: 5,
};

/* range[Symbol.iterator] = function () {
  let current = this.start;
  const stop = this.stop;
  const step = this.step;
  return {
    next() {
      const o = {
        value: current,
        done: current > stop,
      };
      current += step;
      return o;
    },
  };
}; */
/*
for (let v in range) {
  console.log(v);
}
 */

//==================Generator ============
/* function* myGenerator() {
  yield 1; // একটা ডাটা দাও
  yield 2;
  yield 3;
}
const iterator = myGenerator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); */
/* function* range(start = 0, stop = 100, step = 5) {
  for (let i = start; i <= stop; i += step) {
    yield i;
  }
} */
/*const rangeIt = range(1, 10, 3);
console.log(rangeIt.next());
console.log(rangeIt.next());
console.log(rangeIt.next()); */
/* for (let v of range()) {
  console.log(v);
} */

function* generateId() {
  let index = 1;
  while (true) {
    yield index++;
  }
}
const generateProductId = generateId();
const generateUserId = generateId();
console.log("user" + generateProductId.next().value);
console.log("user" + generateProductId.next().value);
console.log("user" + generateProductId.next().value);
console.log("user" + generateProductId.next().value);
console.log("user" + generateProductId.next().value);
console.log("user" + generateProductId.next().value);
console.log(generateUserId.next().value);
console.log(generateUserId.next().value);
