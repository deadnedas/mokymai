"use strict";

let puodeliuSk = Number(
  prompt("Puodeliu, kuriuos reikia supakuoti, skaicius", 0)
);
const nepilnosDezes = puodeliuSk % 3;

let pilnosDezes = 0;

while (puodeliuSk >= 0) {
  puodeliuSk -= 3;
  if (puodeliuSk <= 0) {
    break;
  }
  pilnosDezes++;
}
console.log("Pilnos dezes: " + pilnosDezes);
console.log("Nepilnos dezes: " + nepilnosDezes);
