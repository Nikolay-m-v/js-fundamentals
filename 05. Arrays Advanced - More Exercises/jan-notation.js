"use strict";

function janNotation(array) {
  let numbers = [];
  let operators = [];

  for (let i = 0; i < array.length; i++) {
    let typeOfSymbol = typeof array[i];
    if (typeOfSymbol === "number") {
      numbers.push(array[i]);
    } else {
      operators.push(array[i]);
    }

    if (numbers.length >= 2 && operators.length === 1) {
      while (operators.length > 0) {
        let num1 = numbers[numbers.length - 2];
        let num2 = numbers[numbers.length - 1];
        let operator = operators[0];

        let sum = 0;
        switch (operator) {
          case "+":
            sum = num1 + num2;
            break;
          case "-":
            sum = num1 - num2;
            break;
          case "*":
            sum = num1 * num2;
            break;
          case "/":
            sum = num1 / num2;
            break;
        }
        numbers.splice(0, 2);
        operators.splice(0, 1);
        numbers.push(sum);
      }
    }
  }

  if (numbers.length - operators.length > 1) {
    console.log("Error too many operands!");
    return;
  }

  if (operators.length - numbers.length >= 0) {
    console.log("Error: not enough operands!");
    return;
  }

  console.log(numbers.join(" "));
}

janNotation([3, 4, "+"]);
janNotation([7, 33, 8, "-"]);
