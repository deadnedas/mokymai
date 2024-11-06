"use strict";
//1
function product(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
}

console.log(product([2, 4, 6]));
console.log(product([-10, 10]));

//2
console.log("______________");

const anyPositive = function (arr) {
  if (arr.find((number) => number > 0) != undefined) {
    console.log(true);
  } else {
    console.log(false);
  }
};

anyPositive([1, 2, 3, 4, 5]); // true
anyPositive([1, 2, -3, 4, 5]); // true
anyPositive([0, 0, 1]); // true
anyPositive([-10, -10, -10]); // false
anyPositive([-10, -10, 1]); // true

//3
console.log("______________");

const positives = function (arr) {
  console.log(arr.filter((num) => num > 0));
};

positives([1, -3, 5, -3, 0]); // [1, 5]
positives([1, 2, 3]); // [1, 2, 3]
positives([-1, -2, -3]); // []

//4
console.log("______________");

const mean = function (arr) {
  const avg =
    arr.reduce((accumulator, currentValue) => accumulator + currentValue) / 3;
  console.log(avg);
};

mean([30, 10, 20]); // 20)
mean([-10, 10]); // 0

//5
console.log("______________");

const evens = function (arr) {
  console.log(arr.filter((num) => num % 2 === 0));
};

evens([1, 2, 4, 3, 8]); // [2, 4, 8]

//6
console.log("______________");

const odds = function (arr) {
  console.log(arr.filter((num) => num % 2 != 0));
};
odds([1, 2, 4, 3, 8]); // [1, 3]

//7
console.log("______________");

const integers = function (arr) {
  console.log(arr.filter((num) => Number.isInteger(num)));
};
integers([3.14, 2.4, 7, 8.1, 2]); // [7, 2]

//8
console.log("______________");

const countEvens = function (arr) {
  const evenArr = arr.filter((num) => num % 2 === 0);
  return evenArr.length;
};

console.log(countEvens([1, 2, 3, 4, 5])); // 2
console.log(countEvens([10, 10, 10])); // 3
console.log(countEvens([1, 1, 1, 2])); // 2

//9
console.log("______________");

const countLessThan = function (arr, filter) {
  const evenArr = arr.filter((num) => num < filter);
  return evenArr.length;
};

console.log(countLessThan([1, 2, 3, 4, 5], 2)); // 1
console.log(countLessThan([1, 2, 3, 4, 5], 17)); // 5
console.log(countLessThan([1, 2, 1, 2, 3, 4, 1, 2, 1], 1)); // 0
console.log(countLessThan([10, 10, 10, -10, 15, 7], 10)); // 2

//10
console.log("______________");

const squareDance = function (arr) {
  const squaredArr = arr.map((num) => num ** 2);
  return squaredArr;
};

console.log(squareDance([1, 2, 3])); // [1, 4, 9]

//11
console.log("______________");

const glueArrays = function (arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(glueArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(glueArrays([-10, undefined], [true, "waffles"])); // [-10, undefined, true, ‘waffles’]
console.log(glueArrays([], [])); // []
console.log(glueArrays([20, 104], [])); // [20, 104]
console.log(glueArrays([], ["hello", "world"])); // ['hello', 'world']

//12
console.log("______________");

const countValue = function (arr, value) {
  const valueArr = arr.filter((num) => num === value);
  return valueArr.length;
};
console.log(countValue([1, 2, 3, 4, 5], 2)); // 1
console.log(countValue([1, 2, 3, 4, 5], 17)); // 0
console.log(countValue([1, 2, 1, 2, 3, 4, 1, 2, 1], 1)); // 4
console.log(countValue([10, 10, 10, -10], 10)); // 3
console.log(countValue(["hello", "bananas", "hello"], "hello")); // 2
console.log(countValue(["hello", "bananas", "hello"], "giraffe")); // 0

//13
console.log("______________");

const findInHaystack = function (arr, value) {
  return arr.includes(value);
};
console.log(findInHaystack([1, 2, 30, -10], 480)); // false
console.log(findInHaystack([1, 2, 30, -10], 30)); // true
console.log(findInHaystack(["waffle", "giraffe", "banana"], "giraffe")); // true
console.log(findInHaystack(["waffle", "giraffe", "banana"], "lemons")); // false

//14
console.log("______________");

const firstIndexOf = function (arr, value) {
  return arr.findIndex((num) => num === value);
};
console.log(firstIndexOf([10, 20, 30, 20], 20)); // 1
console.log(firstIndexOf([10, 20, 30, 20], 17)); // -1
console.log(firstIndexOf(["giraffe", "giraffe", "banana"], "giraffe")); // 0
console.log(firstIndexOf(["giraffe", "giraffe", "banana"], "banana")); // 2
