"use strict";

function oddAndEvenSum(number) {
  let even = 0;
  let odd = 0;
  let splitted = number.toString().split("");
  for (let i = 0; i < splitted.length; i++) {
    let currentNumber = Number(splitted[i]);
    if (currentNumber % 2 === 0) {
      even += currentNumber;
    } else {
      odd += currentNumber;
    }
  }
  console.log(`Odd sum =  ${odd}, Even sum = ${even}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
