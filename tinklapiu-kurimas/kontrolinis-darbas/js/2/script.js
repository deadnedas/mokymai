"use strict";

const positives = (arr) =>
  Array.isArray(arr) ? arr.filter((num) => num > 0) : "not a array";

console.log(positives([1, -3, 5, -3, 0]));
console.log(positives([1, 2, 3]));
console.log(positives([-1, -2, -3]));
console.log(positives(2));
