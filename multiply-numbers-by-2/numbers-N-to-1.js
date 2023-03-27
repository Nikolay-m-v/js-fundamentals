"use strict";

// Write a function that receives a number N and prints all the numbers from N to 1. Try using the while loop.

function numbersPrint(input) {
  let n = Number(input);
  while (n !== 0) {
    console.log(n);
    n--;
  }
}

numbersPrint(["5"]);
numbersPrint(["3"]);
