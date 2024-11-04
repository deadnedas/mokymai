"use strict";

const greitis = Number(prompt("Koksai yra automobilio greitis?", 0)) / 3.6;
const kelias = 264;
const laikas = kelias / greitis;
console.log(`Automobilis tuneli pravaziuos per ${laikas.toFixed(2)} s`);
