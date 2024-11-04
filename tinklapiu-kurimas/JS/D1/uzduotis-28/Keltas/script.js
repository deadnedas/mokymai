"use strict";

const automobiliuSk = Number(prompt("Automobiliu skaicius", 0));
const keltoTalpa = Number(prompt("I kelta telpa automobiliu", 0));

const keltoKartu = Math.trunc(automobiliuSk / keltoTalpa);
const neperkeltu = automobiliuSk % keltoTalpa;

console.log("Perkels per kartu: " + keltoKartu);
console.log("Liks neperkeltu: " + neperkeltu);
