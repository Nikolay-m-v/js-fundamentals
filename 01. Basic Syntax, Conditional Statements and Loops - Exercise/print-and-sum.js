"use strict";

function printAndSum(start, end) {
  let startingNumber = Number(start);
  let endingNumber = Number(end);
  let totalSum = 0;

  for (let i = startingNumber; i <= endingNumber; i++) {
    console.log(i);
    totalSum += i;
  }
  console.log(totalSum);
}

printAndSum("5", "10");
printAndSum("0", "26");
