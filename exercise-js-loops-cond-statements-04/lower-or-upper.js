"use strict";

function lowerOrUpper(char) {
  let character = char;
  if (character == character.toUpperCase()) {
    console.log("Upper case");
  } else {
    console.log("Lower case");
  }
}

lowerOrUpper("L");
lowerOrUpper("o");
lowerOrUpper("X");
