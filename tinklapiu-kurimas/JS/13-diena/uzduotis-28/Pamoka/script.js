"use strict";

const pirmadienis = Number(prompt("Kiek yra pamoku pirmadieni?", 0));
const antradienis = Number(prompt("Kiek yra pamoku antradieni?", 0));
const treciadienis = Number(prompt("Kiek yra pamoku treciadieni?", 0));
const ketvirtadienis = Number(prompt("Kiek yra pamoku ketvirtadieni?", 0));
const penktadienis = Number(prompt("Kiek yra pamoku penktadieni?", 0));

const pamokuSk =
  pirmadienis + antradienis + treciadienis + ketvirtadienis + penktadienis;
const pamokuMinutes = pamokuSk * 45;
console.log("Pamoku skaicius: " + pamokuSk);
console.log("Tai sudaro minuciu: " + pamokuMinutes);
