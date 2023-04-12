"use strict";

function signCheck(num1, num2, num3) {
  const negatives = [num1, num2, num3].filter((num) => num < 0);
  return negatives.length % 2 === 0 ? "positive" : "negative";
}
console.log(signCheck(5, 12, -15));
console.log(signCheck(-6, -12, 14));
console.log(signCheck(-1, -2, -3));
console.log(signCheck(-5, 1, 1));
