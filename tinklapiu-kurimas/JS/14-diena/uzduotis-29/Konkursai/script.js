"use strict";

const start = Number(prompt("Įveskite intervalo pradžią:", 0));
const end = Number(prompt("Įveskite intervalo pabaiga:", 0));

let marskineliuSk = 0;
for (let i = start; i <= end; i++) {
  if (i % 6 == 0) {
    marskineliuSk++;
  }
}

console.log(`Reikalingų marškinėlių skaičius: ${marskineliuSk}`);
