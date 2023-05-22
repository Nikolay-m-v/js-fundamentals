"use strict";

function wordTracker(array) {
  let targetWords = array.shift().split(" ");
  let targetWordsOneCounter = 0;
  let targetWordsTwoCounter = 0;
  for (let i = 0; i < array.length; i++) {
    let currentWord = array[i];
    if (currentWord === targetWords[0]) {
      targetWordsOneCounter++;
    } else if (currentWord === targetWords[1]) {
      targetWordsTwoCounter++;
    }
  }
  console.log(`${targetWords[0]} - ${targetWordsOneCounter}`);
  console.log(`${targetWords[1]} - ${targetWordsTwoCounter}`);
}

wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
wordTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
