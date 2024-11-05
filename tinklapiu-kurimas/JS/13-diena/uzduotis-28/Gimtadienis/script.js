"use strict";

const iskeptuSausainiu = Number(prompt("Kiek sausainiu iskepe Tautvydas", 0));
const atnestiSausainiai = Number(
  prompt("Kiek draugu atsinese tiek pat sausainiu", 0)
);
const zmoniuKiekis = Number(prompt("Kiek zmoniu is viso dalyvavo sventeje", 0));

const sausainiuKiekis = iskeptuSausainiu + atnestiSausainiai * iskeptuSausainiu;
const sausainiuKiekisZmogui = Math.trunc(sausainiuKiekis / zmoniuKiekis);
const sausainiuLiekana = sausainiuKiekis % zmoniuKiekis;

console.log(
  `Kiekvienas sventes dalyvis gavo po ${sausainiuKiekisZmogui} sausainius`
);
console.log(`Tatuvydui papildomai atiteko ${sausainiuLiekana} sausainiai`);
