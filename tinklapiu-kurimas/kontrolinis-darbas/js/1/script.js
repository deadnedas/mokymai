"use strict";
function product(n) {
  let suma = 0;
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0 && i > 0 && i <= n) {
      suma += i;
    }
  }
  return suma;
}

const n = Number(prompt("irasyk skaiciu", 0));
console.log(product(n));
