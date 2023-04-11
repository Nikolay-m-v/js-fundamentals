"use strict";

function noRemainded(number, mod) {
  if (number % mod === 0) {
    return true;
  }
  return false;
}

const result1 = noRemainded(10, 7);
const result2 = noRemainded(100, 10);
console.log(result1, result2);
