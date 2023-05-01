"use strict";

function primeNumberChecker(input) {
  if (input === 0 || input === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (input % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeNumberChecker(7));
primeNumberChecker(8);
primeNumberChecker(81);
