"use strict";

function reversedChars(char1, char2, char3) {
  let inputIntoArray = [char1, char2, char3];
  let reversed = inputIntoArray.reverse();
  console.log(reversed);
  console.log(`${char3} ${char2} ${char1}`);
}

reversedChars("a", "b", "c");
reversedChars("1", "L", "&");
