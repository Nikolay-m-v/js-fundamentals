"use strict";

function charactersInRange(char1, char2) {
  let asciiChar1 = char1.charCodeAt(0);
  let asciiChar2 = char2.charCodeAt(0);
  let startNumber = 0;
  let endNumber = 0;
  let result = "";

  if (asciiChar2 < asciiChar1) {
    startNumber = asciiChar2;
    endNumber = asciiChar1;
  } else {
    startNumber = asciiChar1;
    endNumber = asciiChar2;
  }

  for (let i = startNumber + 1; i < endNumber; i++) {
    let string = String.fromCharCode(i);
    result += " ";
    result += string;
  }

  console.log(result);
}

charactersInRange("a", "d");
charactersInRange("#", ":");
charactersInRange("C", "#");
