"use strict";

const ilgis = Number(prompt("Sienos ilgis metrais", 0));
const aukstis = Number(prompt("Sienos aukstis metrais", 0));
const plytosKaina = Number(prompt("Plytos kaina litais", 0));

const plytuKiekis = (ilgis * aukstis * 10000) / (20 * 10);
const kaina = plytuKiekis * plytosKaina;
console.log("Plytu kiekis: " + plytuKiekis);
console.log(`Plytos kainuos  ${kaina.toFixed(2)} LT`);
