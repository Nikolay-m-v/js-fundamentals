"use strict";

function reverseInPlace(input) {
  console.log(input.reverse().join(" "));
  // for (let i = 0; i < input.length; i++) {
  //   swapElements(arr, i, input.length - 1 - i);
  // }
  // console.log(input.join(""));
  // function swapElements(input, i, j) {}
}

reverseInPlace(["a", "b", "c", "d", "e"]);
reverseInPlace(["abc", "def", "hig", "klm", "nop"]);
reverseInPlace(["33", "123", "0", "dd"]);
