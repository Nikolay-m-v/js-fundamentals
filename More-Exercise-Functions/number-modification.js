"use strict";

function numberModification(number) {
  let digits = number.toString().split("").map(Number);
  let sum = digits.reduce((acc, curr) => acc + curr);
  let average = sum / digits.length;
  for (let i = 0; i <= digits.length; i++) {
    if (average <= 5) {
      number = parseInt(number.toString() + "9");
    }
  }

  console.log(number);
}

numberModification(101);
numberModification(5835);
