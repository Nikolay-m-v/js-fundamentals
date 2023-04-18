"use strict";

function crystals(array) {
  const desiredThickness = array[0];
  const startingThickness = array[1];
  let thickness = startingThickness;

  let cutCount = 0;
  while (thickness / 4 >= desiredThickness) {
    thickness /= 4;
    cutCount++;
  }

  let lapCount = 0;
  while (thickness * 0.8 >= desiredThickness) {
    thickness *= 0.8;
    lapCount++;
  }

  let grindCount = 0;
  while (thickness - 20 >= desiredThickness) {
    thickness -= 20;
    grindCount++;
  }

  let etchCount = 0;
  while (thickness - 2 >= desiredThickness - 1) {
    thickness -= 2;
    etchCount++;
  }

  let xrayCount = 0;
  if (thickness + 1 === desiredThickness) {
    thickness++;
    xrayCount++;
  }

  console.log(`Processing chunk ${startingThickness} microns`);

  if (cutCount > 0) {
    console.log(`Cut ${cutCount}`);
    console.log(`Transporting and washing`);
  }

  if (lapCount > 0) {
    console.log(`Lap ${lapCount}`);
    console.log(`Transporting and washing`);
  }

  if (grindCount > 0) {
    console.log(`Grind ${grindCount}`);
    console.log(`Transporting and washing`);
  }

  if (etchCount > 0) {
    console.log(`Etch ${etchCount}`);
    console.log(`Transporting and washing`);
  }

  if (xrayCount > 0) {
    console.log(`X-ray ${xrayCount}`);
    console.log(`Transporting and washing`);
  }

  thickness = Math.floor(thickness);

  const operationsCount =
    cutCount + lapCount + grindCount + etchCount + xrayCount;
  console.log(`Finished crystal ${thickness} microns`);
  if (operationsCount > 0) {
    console.log(`Operations: ${operationsCount}`);
  }
}

crystals([1375, 50000]);
