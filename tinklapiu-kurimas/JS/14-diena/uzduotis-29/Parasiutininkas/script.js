"use strict";

const aukstis = Number(prompt("is kokio aukscio soka parasiutininkas", 0));
const laikas = Number(
  prompt("per kiek sekudnziu issiskleidzia jo parasiutas", 0)
);

const g = 9.8;

const kritimoLaikas = Math.sqrt((2 * aukstis) / g);

if (kritimoLaikas > laikas) {
  console.log("Parašiutas išsiskleis");
} else {
  console.log("arašiutas neišsiskleis");
}
