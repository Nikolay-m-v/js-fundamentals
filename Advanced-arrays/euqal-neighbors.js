"use strict";

function equalNeighbors(input) {
  let equalCounter = 0;
  for (let i = 0; i < input.length; i++) {
    let row = input[i];
    for (let j = 0; j < row.length; j++) {
      let col = row[j];
      if (i !== input.length - 1) {
        if (col === row[j + 1]) {
          equalCounter++;
        }
        if (col === input[i + 1][j]) {
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
equalNeighbors([
  ["test", "yo", "yo", "ho"],
  ["well", "done", "no", "6"],
  ["not", "done", "yet", "5"],
]);
