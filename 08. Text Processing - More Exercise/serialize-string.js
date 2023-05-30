"use strict";

function serializeString(array) {
  let [word] = array;
  let letters = {};

  for (let i = 0; i < word.length; i++) {
    let currLetter = word[i];

    if (!letters.hasOwnProperty(currLetter)) {
      letters[currLetter] = [i];
    } else {
      letters[currLetter].push(i);
    }
  }

  for (let letter in letters) {
    console.log(`${letter}:${letters[letter].join("/")}`);
  }
}

serializeString(["abababa"]);
serializeString(["avjavamsdmcalsdm"]);
