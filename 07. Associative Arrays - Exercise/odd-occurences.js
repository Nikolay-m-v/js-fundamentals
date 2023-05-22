"use strict";

function oddOccurences(input) {
  input = input.toLowerCase().split(" ");
  let words = {};

  for (let word of input) {
    words.hasOwnProperty(word) ? words[word]++ : (words[word] = 1);
  }

  let sorted = Object.entries(words);
  let result = [];

  for (let [word, occurences] of sorted) {
    if (occurences % 2 === 1) {
      result.push(word);
    }
  }

  console.log(result.join(" "));
}

oddOccurences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddOccurences("Cake IS SWEET is Soft CAKE sweet Food");
