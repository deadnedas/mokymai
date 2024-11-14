// "use strict";

// const hello = () => {
//   return "Hello";
// };

// let a, b, rest;
// [a, b] = [10, hello()];
// console.log(a);
// console.log(b);

// _________________________________________
// const array = [{ name: "Julius", age: 44, dob: 15 }, hello(), "Aloyzas"];
// const [a, b] = array;
// console.log(a);
// console.log(b);

// const student = {
//   id: 475,
//   age: 32,
//   firstName: "Vardenis",
//   lastName: "Pavardenis",
// };

// const { id, firstName } = student;
// console.log(id);
// console.log(firstName);
// // Tas pats kodas bet virsui yra geriau ^^^^^
// console.log(student.id);
// console.log(student.firstName);

// const student = {
//   id: 475,
//   age: 32,
//   firstName: "Vardenis",
//   lastName: "Pavardenis",
//   address: {
//     city: "Wilno",
//     zipCode: 15548,
//     streetName: "Vilniaus gatve",
//     houseNumber: 15,
//   },
//   calculateMonthsLived: function () {
//     return this.age * 12;
//   },
// };

// const { address } = student;
// console.log(address);
// console.log(student.calculateMonthsLived());

// // __________________________________________________

const numbers = [
  { age: 21, name: "Jurgis" },
  { age: 11, name: "Tomas" },
  { age: 23, name: "Aloyzas" },
  { age: 64, name: "Martynas" },
];
const result = numbers.reduce(
  (accumulator, person) => accumulator + person.age,
  0
);
console.log(result);
