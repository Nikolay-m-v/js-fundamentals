"use strict";

function passwordGenerator(input) {
  let [firstWord, secondWord, word] = input;
  word = word.toLocaleUpperCase();
  let concatenated = firstWord + secondWord;
  let password = "";
  let usedLetters = 0;

  for (let i = 0; i < concatenated.length; i++) {
    let currentChar = concatenated[i];

    if (
      currentChar === "a" ||
      currentChar === "e" ||
      currentChar === "i" ||
      currentChar === "o" ||
      currentChar === "u"
    ) {
      currentChar = word[usedLetters];
      usedLetters++;
      if (usedLetters === word.length) {
        usedLetters = 0;
      }
    }
    password += currentChar;
  }
  console.log(
    `Your generated password is ${password.split("").reverse().join("")}`
  );
}

passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
