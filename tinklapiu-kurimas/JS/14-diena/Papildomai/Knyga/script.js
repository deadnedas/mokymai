"use strict";

const skyriuSkaicius = Number(prompt("Iveskite knygos skyrių skaičių:", 0));

let dienos = 0;
let i = 1;
let temp = skyriuSkaicius;
while (true) {
  if (temp > 0) {
    temp -= i;
    i++;
    dienos++;
  } else {
    break;
  }
}
const avgSkyriuPerDiena = Math.round((skyriuSkaicius / dienos) * 100) / 100;

console.log(`Tadas visą knygą perskaitys per ${dienos} dienas`);
console.log(
  `Tadas vidutiniškai per dieną perskaitė ${avgSkyriuPerDiena} skyrius`
);
