"use strict";

function wordOccurences(input) {
  let wordRecords = {};

  for (let word of input) {
    if (wordRecords.hasOwnProperty(word)) {
      wordRecords[word]++;
    } else {
      wordRecords[word] = 1;
    }
  }

  let sorted = Object.entries(wordRecords).sort((a, b) => b[1] - a[1]);

  for (let [word, occurences] of sorted) {
    console.log(`${word} -> ${occurences} times`);
  }
}

wordOccurences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
