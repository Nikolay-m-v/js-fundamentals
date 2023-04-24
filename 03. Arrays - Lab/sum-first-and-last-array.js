"use strict";

function sumFirstLast(input) {
  let first = input[0];
  let last = input[input.length - 1];
  console.log(first + last);
}

sumFirstLast([20, 30, 40]);
sumFirstLast([10, 17, 22, 33]);
