"use strict";

const saldainiuKiekis = Number(prompt("Kiek saldainiu gauna Marius", 0));
const suvalgymoKiekis = Number(prompt("Po kiek saldainiu suvalgo", 0));
const dienuKiekis = Number(prompt("Kelios dienos iki Kaledu", 0));

const likeSaldainiai =
  saldainiuKiekis * dienuKiekis - suvalgymoKiekis * dienuKiekis;

const dovanuKiekis = Math.trunc(likeSaldainiai / suvalgymoKiekis);
const saldainiuLiekana = likeSaldainiai % suvalgymoKiekis;

console.log(`Marius dovanas paruos ${dovanuKiekis} draugams`);
console.log(`Supakavus dovanas liks ${saldainiuLiekana} saldainiai`);
