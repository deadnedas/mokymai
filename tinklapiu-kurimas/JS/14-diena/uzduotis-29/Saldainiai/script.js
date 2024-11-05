"use strict";

let saldainiuKiekis = Number(prompt("Petriukas gavo saldainių: ", 0));
let dienuKiekis = 0;

while (true) {
  const temp = Number(prompt("Per dieną suvalgė:  ", 0));

  if (saldainiuKiekis - temp > 0) {
    saldainiuKiekis -= temp;
    dienuKiekis++;
  } else {
    break;
  }
}
console.log(
  `Petriukui saldainių užteks ${dienuKiekis} dienoms ir jam liks ${saldainiuKiekis} saldainiai.`
);
