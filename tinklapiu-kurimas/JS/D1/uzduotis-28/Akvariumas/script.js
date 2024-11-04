"use strict";

const zuvuKiekis = Number(prompt("Kiek zuvu gyvena akvariume", 0));
const naujuZuvuPerDiena = Number(
  prompt("Kiek zuvu idedama i akvariuma kas diena", 0)
);
const dienuKiekis = Number(prompt("Kiek dienu praejo", 0));

const zuvis = zuvuKiekis + naujuZuvuPerDiena * dienuKiekis;
console.log(`Po ${dienuKiekis} dienu akvariume gyvens ${zuvis} zuvu`);
