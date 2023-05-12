"use strict";

function smallestNumbers(array) {
  let sorted = array.sort((a, b) => a - b);
  let sliced = array.slice(0, 2);
  console.log(sliced);
}

smallestNumbers([30, 15, 50, 5]);
