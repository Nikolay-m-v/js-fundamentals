"use strict";

function revealWords(string1, string2) {
  let words = string1.split(", ");
  while (string2.includes("*")) {
    let word = words.shift();
    string2 = string2.replace("*".repeat(word.length), word);
  }
  console.log(string2);
}

revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
