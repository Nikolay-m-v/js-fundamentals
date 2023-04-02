"use strict";

function evenOddSubtraction(input) {
  let evenSum = 0;
  let oddSum = 0;
  let totalSum = 0;
  for (let i = 0; i < input.length; i++) {
    let currentNumber = input[i];
    if (currentNumber % 2 === 0) {
      evenSum += currentNumber;
    } else {
      oddSum += currentNumber;
    }
  }
  totalSum = evenSum - oddSum;
  console.log(totalSum);
}

evenOddSubtraction([1, 2, 3, 4, 5, 6]);
evenOddSubtraction([3, 5, 7, 9]);
evenOddSubtraction([2, 4, 6, 8, 10]);
