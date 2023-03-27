"use strict";

// Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.

function sumOfOddNumbers(n) {
  let oddNumbers = 1;
  let number = 1;
  let sum = 0;
  let evenNumbers = 0;
  for (let j = 1; j <= 10; j++) {
    if (j % 2 === 0) {
      evenNumbers++;
    } else {
      oddNumbers++;
      console.log(j);
      sum += j;
      if (oddNumbers === n) {
        break;
      }
    }
  }
  console.log("sum is: " + sum);
}

sumOfOddNumbers("5");
