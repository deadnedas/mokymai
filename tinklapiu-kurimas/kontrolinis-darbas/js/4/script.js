"use strict";
const filterItems = (arr, filter) => {
  const newArr = arr.filter((name) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  newArr.sort();
  newArr.map((name) => `*${name}`);

  return newArr;
};
const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];
console.log(filterItems(friends, "ka")); // ["*Marika", "*Rika"];
console.log(filterItems(friends, "e")); // ["*Alex", "*Oliver"];
