"use strict";

function nxnMatrix(n) {
  let matrix = "";
  let matrixRow = "";
  let nToString = n.toString();
  for (let i = 0; i < n; i++) {
    matrixRow += nToString;
    matrix += nToString;
    matrix += " ";
    for (let j = 0; j < n; j++) {}
  }
  for (let k = 0; k < n; k++) {
    console.log(matrix);
  }
}

nxnMatrix(7);
