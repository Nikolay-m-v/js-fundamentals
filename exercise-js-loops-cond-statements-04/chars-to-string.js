"use strict";

function charsToString(char1, char2, char3) {
  let stringChar1 = char1.toString();
  let stringChar2 = char2.toString();
  let stringChar3 = char3.toString();
  let result = stringChar1 + stringChar2 + stringChar3;
  console.log(result);
}

charsToString("a", "b", "c");
charsToString("%", "2", "o");
charsToString("1", "5", "p");
