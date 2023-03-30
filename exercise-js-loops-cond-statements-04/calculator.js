"use strict";

function calculator(number, operator, number2) {
  switch (operator) {
    case "+":
      console.log((number + number2).toFixed(2));
      break;
    case "-":
      console.log((number - number2).toFixed(2));
      break;
    case "*":
      console.log((number * number2).toFixed(2));
      break;
    case "/":
      console.log((number / number2).toFixed(2));
      break;
  }
}

calculator(5, "+", 10);
calculator(25.5, "-", 3);
