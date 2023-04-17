"use strict";

function factorialDivision(num1, num2) {
  let numOneFactorial = 1;
  let numTwoFactorial = 1;

  for (let i = num1; i > 0; i--) {
    numOneFactorial *= i;
  }
  for (let j = num2; j > 0; j--) {
    numTwoFactorial *= j;
  }
  let result = numOneFactorial / numTwoFactorial;
  console.log(result);
}

factorialDivision(5, 2);
factorialDivision(6, 2);
