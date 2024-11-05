"use strict";

const svoris = Number(prompt("Kiek sveria varlė?", 0));
const stebejimoKiekis = Number(prompt("Kiek varlių norima stebėti?", 0));

const stebejimoSvoris = svoris * stebejimoKiekis;

if (stebejimoSvoris >= 5000) {
  console.log("Varlių stebėjimui pakanka");
} else {
  console.log("Varlių stebėjimui per mažai");
}
