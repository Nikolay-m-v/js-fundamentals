"use strict";

function asciiSumator(array) {
  let [char1, char2, string] = array;
  let asciiChar1 = char1.charCodeAt();
  let asciiChar2 = char2.charCodeAt();
  let sum = 0;

  for (let i = 0; i < string.length; i++) {
    let currLetter = string[i].charCodeAt();
    if (
      currLetter > asciiChar1 &&
      currLetter < asciiChar2 &&
      asciiChar1 < asciiChar2
    ) {
      sum += currLetter;
    } else if (
      currLetter < asciiChar1 &&
      currLetter > asciiChar2 &&
      asciiChar1 > asciiChar2
    ) {
      sum += currLetter;
    }
  }

  console.log(sum);
}

asciiSumator([".", "@", "dsg12gr5653feee5"]);
asciiSumator(["?", "E", "@ABCEF"]);
asciiSumator(["a", "1", "jfe392$#@j24ui9ne#@$"]);
