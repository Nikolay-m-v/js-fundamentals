"use strict";

function triangle(number) {
  for (let i = 1; i <= number; i++) {
    let printLine = "";
    for (let j = 1; j <= i; j++) {
      printLine += i;
    }
    console.log(printLine);
  }
}

triangle("3");
triangle("5");
triangle("6");
