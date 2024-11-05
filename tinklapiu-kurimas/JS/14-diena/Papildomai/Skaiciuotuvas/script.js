"use strict";

const operator = Number(prompt("Įveskite veiksmą: ", "0"));

let suma = 0;
let daugybaSuma = 1;

while (true) {
  const temp = Number(prompt());

  if (temp == 0) {
    break;
  }

  if (operator == 1) {
    suma += temp;
  } else if (operator == 2) {
    suma -= temp;
  } else if (operator == 3) {
    daugybaSuma *= temp;
  } else if (operator == 4 && suma < temp) {
    suma = temp;
  } else if (operator == 5 && suma > temp) {
    suma = temp;
  }
}

if (operator == 1) {
  console.log(`Addition: ${suma}`);
} else if (operator == 2) {
  console.log(`Subtraction: ${suma}`);
} else if (operator == 3) {
  console.log(`Multiplication: ${daugybaSuma}`);
} else if (operator == 4) {
  console.log(`Max: ${suma}`);
} else if (operator == 5) {
  console.log(`Min: ${suma}`);
}
