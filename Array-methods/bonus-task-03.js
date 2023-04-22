"use strict";

const nums = [10, 30, 50, 70, 90]
  .map((number) => {
    return number ** 2;
  })
  .filter((number) => {
    if (number > 1000) {
      return number;
    }
  })
  .reduce((result, number) => {
    return result + number;
  }, 0);

// const squares = nums.map((number) => {
//   return number ** 2;
// });

// const over1000 = squares.filter((num) => {
//   if (num > 1000) {
//     return num;
//   }
//   return false;
// });

// const finale = over1000.reduce((result, element) => {
//   return result + element;
// }, 0);

console.log(nums);
// console.log(squares);
// console.log(over1000);
// console.log(finale);
