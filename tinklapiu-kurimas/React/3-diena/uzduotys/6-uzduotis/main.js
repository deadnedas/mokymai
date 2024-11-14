"use strict";
const books = [
  { title: "Knyga #1", price: 10.25 },
  { title: "Knyga #2", price: 5.15 },
  { title: "Knyga #3", price: 7.32 },
  { title: "Knyga #4", price: 54.01 },
  { title: "Knyga #5", price: 77.17 },
];
const printBooks = () => {
  return books.map((book, i) => `${++i}: ${book.title}`);
};
const countBooks = () => {
  return books.length;
};

const addBook = () => {
  return books.push({ title: "Knyga #6", price: 2.75 });
};

const lastBook = () => {
  return books[books.length - 1];
};

const priceCalc = () => {
  return Math.round(books.reduce((a, b) => a + b.price, 0));
};

const discountCalc = (discount) => {
  books.map((book) => {
    if (book.price >= 10) {
      console.log(
        `Knyga: ${book.title} Sena kaina: ${book.price} Pardavimo kaina: ${
          book.price * (1 - discount / 100)
        } Pritaikyta nuolaida: -${discount}%`
      );
    }
  });
};

const sortBooks = () => {
  return books.sort((a, b) => a.price - b.price);
};

const sortBooksByLetters = () => {
  return books.sort((a, b) => b.title.localeCompare(a.title));
};

const filterBooks = (value) => {
  return books.filter((book) => book.price > value);
};
console.log(printBooks());
console.log(countBooks());
addBook();
console.log(lastBook());
console.log(priceCalc());
discountCalc(25);
console.log(sortBooks());
console.log(sortBooksByLetters());

console.log(filterBooks(7.5));
