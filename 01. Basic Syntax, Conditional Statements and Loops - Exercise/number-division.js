"use strict";

//You will be given a number and you have to check whether that number is divisible by any of the following numbers: 2, 3, 6, 7, and 10. You should always take the bigger division.
// If the number is divisible by both 2 and 3 it is also divisible by 6 and you should print only the division by 6. If a  number is divisible by 2 it is sometimes also divisible by 10 and you should print the division by 10.
// If the number is not divisible by any of the given numbers print: "Not divisible". Otherwise, print: "The number is divisible by {number}".

function numberDivision(params) {
  let numberToDivide = Number(params[0]);

  if (numberToDivide % 10 === 0) {
    numberToDivide = numberToDivide / 10;
    console.log(numberToDivide);
  } else if (numberToDivide % 7 === 0) {
    numberToDivide = numberToDivide / 7;
    console.log(numberToDivide);
  } else if (numberToDivide % 6 === 0) {
    numberToDivide = numberToDivide / 6;
    console.log(numberToDivide);
  } else if (numberToDivide % 3 === 0) {
    numberToDivide = numberToDivide / 3;
    console.log(numberToDivide);
  } else if (numberToDivide % 2 === 0) {
    numberToDivide = numberToDivide / 2;
    console.log(numberToDivide);
  } else {
    console.log("Not divisible");
  }
}

numberDivision(["50"]);
