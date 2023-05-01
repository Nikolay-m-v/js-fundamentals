"use strict";

function triangleArea(num1, num2, num3) {
  let semiPerimeter = (num1 + num2 + num3) / 2;
  let area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - num1) *
      (semiPerimeter - num2) *
      (semiPerimeter - num3)
  );
  console.log(area);
}

triangleArea(2, 3.5, 4);
