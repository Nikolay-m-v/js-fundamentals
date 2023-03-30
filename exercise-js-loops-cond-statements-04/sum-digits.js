"use strict";

function sumDigits(number) {
  let num = number.toString();
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    let currentNum = Number(num[i]);
    sum += currentNum;
  }
  console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);
