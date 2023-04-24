"use strict";

function leapOrNo(number) {
  number = Number(number);

  if (number % 400 === 0 || number % 4 === 0) {
    console.log("Yes");
  } else {
    console.log("no");
  }
}

leapOrNo("1984");
leapOrNo("2003");
leapOrNo("4");
