"use strict";

function repeatString(string, number) {
  let result = "";
  for (let i = 0; i < number; i++) {
    result += string;
  }
  console.log(result);
}

repeatString("abc", 3);
repeatString("String", 2);
