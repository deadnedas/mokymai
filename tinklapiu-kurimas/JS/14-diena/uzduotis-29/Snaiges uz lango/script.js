"use strict";

const snaigiuSkaiciusStart = Number(
  prompt("Iveskite, kiek snaigių nukrito per pirmąją sekundę", 0)
);
const laikas = Number(prompt("Iveskite, kiek sekundžių snigo: ", 0));

let snaigiuSkaiciusEnd = 0;
for (let i = 0; i < laikas; i++) {
  snaigiuSkaiciusEnd += snaigiuSkaiciusStart * 2 ** i;
}
console.log(snaigiuSkaiciusEnd);
