"use strict";

const row = [10, 20, 30, 40, 50];

const matrix = row.map((item) => {
  const array = [];
  array.push(item);
  return array;
});

console.log(matrix);
