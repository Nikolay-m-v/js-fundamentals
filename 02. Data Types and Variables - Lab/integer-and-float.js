"use strict";

function integerFloat(num1, num2, num3) {
  let integer = false;
  let sum = num1 + num2 + num3;
  if (sum % 1 === 0) {
    integer = true;
  }
  if (integer) {
    console.log(`${sum} - integer`);
  } else {
    console.log(`${sum} - float`);
  }
}

integerFloat(9, 100, 1.1);
integerFloat(100, 200, 303);
