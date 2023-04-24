"use strict";

function reverseString(string) {
  let reversed = string.split("").reverse().join("");
  console.log(reversed);
}

reverseString("Hello");
reverseString("Softuni");
reverseString("1234");
