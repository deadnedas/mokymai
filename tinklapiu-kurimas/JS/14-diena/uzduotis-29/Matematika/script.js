"use strict";

const pazimiai = [];
let avg = 0;
for (let i = 0; i < 5; i++) {
  pazimiai[i] = Number(prompt("Kokius pažymius gavo Petriukas?", 0));
  avg += pazimiai[i];
}
avg /= 5;

if (avg > 9) {
  console.log("Petriukas gaus 3 saldainius");
} else if (avg > 7) {
  console.log("Petriukas gaus 2 saldainius");
} else {
  console.log("Petriukas gaus 1 saldainius");
}
