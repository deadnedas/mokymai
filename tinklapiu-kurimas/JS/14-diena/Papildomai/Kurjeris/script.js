"use strict";

let virs100Eur = 0;
let avgSum = 0;
let prekiuSk = 0;

while (true) {
  const temp = Number(prompt());
  if (temp != 0) {
    prekiuSk++;
    avgSum += temp;

    if (temp > 100) {
      virs100Eur++;
    }
  } else {
    break;
  }
}
avgSum /= prekiuSk;
console.log(`1. ${virs100Eur}`);
console.log(`2. ${avgSum}`);
console.log(`3. ${prekiuSk}`);
