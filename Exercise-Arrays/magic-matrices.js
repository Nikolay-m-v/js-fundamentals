"use strict";

function magicMatrices(array) {
  let rowTotal = array[0].reduce((a, b) => a + b);
  let colTotal = 0;

  array.forEach((row) => {
    colTotal += row[0];
  });

  let result = true;

  for (let i = 0; i < array.length; i++) {
    const currentRow = array[i].reduce((acc, item) => acc + item);
    let currentCol = 0;
    for (let j = 0; j < array.length; j++) {
      const num = array[j][i];
      currentCol += num;
    }
    if (currentRow !== rowTotal || currentCol !== colTotal) {
      result = false;
      break;
    }
  }
  console.log(result);
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
