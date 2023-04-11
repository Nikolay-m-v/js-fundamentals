"use strict";

function square(num) {
  return num ** 2;
}

function sumOfSquares(num1, num2) {
  return square(num1) + square(num2);
}

const sum1 = sumOfSquares(2, 3);
const sum2 = sumOfSquares(3, 4);
console.log(sum1);
