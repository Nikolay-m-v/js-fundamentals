"use strict";

const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ["a", "b"];
const arr4 = ["b", "c"];
const arr5 = ["b", "e", "c"];
const arr6 = ["b", "b", "e"];
const arr7 = ["b", "c", "e"];
const arr8 = ["b", "e", "c"];
const result = intersection([arr5, arr6]);
console.log(result);

function intersection(arrays) {
  if (!arrays || arrays.length === 0) {
    return [];
  }

  let result = arrays[0];

  for (let i = 1; i < arrays.length; i++) {
    result = result.filter((value) => arrays[i].includes(value));
  }

  return [...new Set(result)];
}

intersection();
