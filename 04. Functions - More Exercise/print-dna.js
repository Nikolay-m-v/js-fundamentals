"use strict";

function printDna(length) {
  let arr = "ATCGTTAGGG".split("");
  for (let i = 1; i <= length; i++) {
    let a = arr.splice(0, 1);
    let b = arr.splice(0, 1);
    if (i % 4 === 1) {
      console.log(`**${a}${b}**`);
    }
    if (i % 4 === 2) {
      console.log(`*${a}--${b}*`);
    }
    if (i % 4 === 3) {
      console.log(`${a}----${b}`);
    }
    if (i % 4 === 0) {
      console.log(`*${a}--${b}*`);
    }
    arr.push(a);
    arr.push(b);
  }
}

printDna(4);
