"use strict";

function replaceRepeatingChars(string) {
  let uniqueString = "";

  for (let i = 0; i < string.length; i++) {
    let currChar = string[i];
    let nextChar = string[i + 1];

    if (currChar !== nextChar) {
      uniqueString += currChar;
    }
  }

  console.log(uniqueString);
}

replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
