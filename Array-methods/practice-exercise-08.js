"use strict";

const values = [
  [1, 2, 3],
  [0, 0, 1],
  [3, 6, 9],
  [0, 1, 2],
];

const hasTwos = values.filter((array) => {
  if (array.includes(2)) {
    return true;
  }
  return false;
});

console.log(values);
console.log(hasTwos);
