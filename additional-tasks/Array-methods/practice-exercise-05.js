"use strict";

const practice = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let evenNumbers = practice.filter((num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
});

console.log(practice);
console.log(evenNumbers);
