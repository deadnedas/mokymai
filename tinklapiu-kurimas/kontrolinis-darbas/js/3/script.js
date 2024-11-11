"use strict";

const sumavimas = function () {
  let suma = 0;
  while (true) {
    const temp = Number(prompt("ivesk skaiciu", 0));
    if (temp > 0) {
      suma += temp;
    } else {
      break;
    }
  }
  console.log(suma);
};
sumavimas();
