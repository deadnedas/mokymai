"use strict";

const ct5 = Number(prompt("Kiek yra monetu po 5 ct", 0));
const ct20 = Number(prompt("Kiek yra monetu po 20 ct", 0));
const lt2 = Number(prompt("Kiek yra monetu po 2 Lt", 0));

const taupykle = lt2 * 2 + ct20 * 0.2 + ct5 * 0.05;
console.log(`Taupykleje yra ${taupykle} LT`);
