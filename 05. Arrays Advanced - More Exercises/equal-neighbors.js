"use strict";

function equalNeighbors(array) {
  let equalCounter = 0;
  for (let i = 0; i < array.length; i++) {
    let row = array[i];
    for (let k = 0; k < row.length; k++) {
      let col = row[k];
      if (i !== array.length - 1) {
        if (col === row[k + 1]) {
          equalCounter++;
        }
        if (col === array[i + 1][k]) {
          equalCounter++;
        }
      }
    }
  }
  console.log(equalCounter);
}

equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
