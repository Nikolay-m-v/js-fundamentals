"use strict";

// Write a function that receives a number M and a number N (M will always be bigger than N). Print all numbers from M to N.

function numsMtoN(m, n) {
  for (let i = m; i >= n; i--) {
    console.log(i);
  }
}

numsMtoN("6", "2");
numsMtoN("8", "3");
