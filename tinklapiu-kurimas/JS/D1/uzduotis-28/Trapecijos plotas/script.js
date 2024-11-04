"use strict";

const ilgesnisPlotas = Number(prompt("Trapecijos ilgesniojo plotas", 0));
const trumpesnisPlotas = Number(prompt("Trapecijos trumpesniojo plotas", 0));
const aukstine = Number(prompt("Trapecijos aukstine", 0));
const trapecijosPlotas = ((ilgesnisPlotas + trumpesnisPlotas) / 2) * aukstine;
console.log("Trapecijos plotas " + trapecijosPlotas);
