"use strict";

const nums = [10, 20, 30, 40, 50];

const timesTwo = nums.map((number) => {
  return number * 2;
});

const over50 = timesTwo.filter((number) => {
  if (number > 50) {
    return true;
  }
  return false;
});

console.log(nums);
console.log(timesTwo);
console.log(over50);
