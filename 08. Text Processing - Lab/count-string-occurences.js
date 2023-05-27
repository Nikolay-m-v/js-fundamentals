"use strict";

function countStringOccurences(text, searchedWord) {
  let occurences = 0;
  let words = text.split(" ");
  for (let word of words) {
    if (word === searchedWord) {
      occurences++;
    }
  }

  console.log(occurences);
}

countStringOccurences("This is a word and it also is a sentence", "is");
