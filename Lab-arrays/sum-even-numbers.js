"use strict";

function sumEvenNumbers(input) {
  let currentNumber = 0;
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    currentNumber = Number(input[i]);
    if (currentNumber % 2 === 0) {
      sum += currentNumber;
    }
  }
  console.log(sum);
}

sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
sumEvenNumbers(["3", "5", "7", "9"]);
sumEvenNumbers(["2", "4", "6", "8", "10"]);
