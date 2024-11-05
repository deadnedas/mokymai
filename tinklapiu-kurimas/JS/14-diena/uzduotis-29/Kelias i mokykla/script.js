"use strict";

const zingsniuKiekis = Number(
  prompt("Įveskite žingsnių kiekį iki mokyklos:", 0)
);

let suplojimai = 0;
let spragtelejimai = 0;
for (let i = 1; i <= zingsniuKiekis; i++) {
  if (i % 10 == 0) {
    suplojimai++;
  } else if (i % 10 == 5) {
    spragtelejimai++;
  }
}
console.log(`Suplojimų bus: ${suplojimai}`);
console.log(`Spragtelėjimų bus: ${spragtelejimai}`);
