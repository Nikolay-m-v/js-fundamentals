"use strict";

function stringSubstring(searchedWord, text) {
  searchedWord = searchedWord.toLocaleLowerCase();
  text = text.toLocaleLowerCase().split(" ");

  for (let word of text) {
    if (word === searchedWord) {
      return console.log(searchedWord);
    }
  }
  console.log(`${searchedWord} not found`);
}

stringSubstring("javascript", "JavaScript is the best programming language");
