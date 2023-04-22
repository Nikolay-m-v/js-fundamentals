"use strict";

const points = [55, 56, 57, 58, 59, 60];

let sum = points.reduce((result, number) => {
  return result + number;
}, 0);

console.log(points);
console.log(sum);
