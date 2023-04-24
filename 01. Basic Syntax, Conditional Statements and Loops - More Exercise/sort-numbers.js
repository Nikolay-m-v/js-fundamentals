"use strict";

function sortNumbers(num1, num2, num3) {
  let biggest = 0;
  let bigger = 0;
  let smallest = 0;

  if (num1 > num2 && num1 > num3) {
    biggest = num1;
  } else if (num2 > num1 && num2 > num3) {
    biggest = num2;
  } else if (num3 > num1 && num3 > num2) {
    biggest = num3;
  }
  if (num1 < num2 && num1 < num3) {
    smallest = num1;
  } else if (num2 < num1 && num2 < num3) {
    smallest = num2;
  } else if (num3 < num2 && num3 < num1) {
    smallest = num3;
  }

  if (num1 > num2 && num1 < num3) {
    bigger = num1;
  } else if (num2 > num1 && num2 < num3) {
    bigger = num2;
  } else if (num3 > num1 && num3 < num2) {
    bigger = num3;
  }
  console.log(biggest);
  console.log(bigger);
  console.log(smallest);
}

sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);
