"use strict";

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
let equal = false;
let stop = false;

arr1.forEach((element, index) => {
  if (element === arr2[index]) {
    equal = true;
  } else {
    equal = false;
    stop = true;
  }
  if (stop) {
    return;
  }
});
if (equal) {
  console.log("Arrays are equal");
}
