"use strict";

function rightPlace(string, char, result) {
  let res = string.replace("_", char);
  if (res === result) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}

rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "Strong");
