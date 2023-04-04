"use strict";

function rorateArray(array) {
  let rotations = Number(array.pop());

  for (let i = 0; i < rotations; i++) {
    let popped = array.pop();
    array.unshift(popped);
  }
  console.log(array.join(" "));
}

rorateArray(["1", "2", "3", "4", "2"]);
rorateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
