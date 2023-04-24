"use strict";

const bools = [true, true, false, true, false, false];

const mapped = bools.map((boolean) => {
  if (boolean === true) {
    return Math.random();
  } else {
    return 0;
  }
});

console.log(mapped);
