"use strict";

function emojiDetector(input) {
  input = input.shift();

  let emojiPattern = /(:{2}|\*{2})(?<word>[A-Z][a-z]{2,})\1/g;
  // Започваме с 2 :: или 2 ** => после имаме група дума, почва с главна и после поне 2 малки => завършваме с каквото сме почнали
  let digitsPattern = /\d/g;
  // Патърна за цифри е всяка една поотделна да се намира

  let coolThreshold = 1;
  let matchNumber = digitsPattern.exec(input);
  let emojis = [];
  let emojiMatch = emojiPattern.exec(input);
  let countOfEmojis = 0;

  while (matchNumber !== null) {
    coolThreshold *= Number(matchNumber[0]);
    matchNumber = digitsPattern.exec(input);
  }

  while (emojiMatch !== null) {
    countOfEmojis++;
    let word = emojiMatch.groups.word;
    let sumLetters = 0;

    for (let letter of word) {
      sumLetters += letter.charCodeAt();
    }

    if (sumLetters > coolThreshold) {
      emojis.push(emojiMatch[0]);
    }
    emojiMatch = emojiPattern.exec(input);
  }
  console.log(`Cool threshold: ${coolThreshold}`);
  console.log(`${countOfEmojis} emojis found in the text. The cool ones are:`);
  console.log(emojis.join("\n"));
}

emojiDetector([
  "In the Sofia Zoo there are at this moment 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
