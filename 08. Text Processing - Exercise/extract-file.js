"use strict";

function extractFile(string) {
  let words = string.split("\\");
  let lastWord = words.pop();
  let lastWordSplit = lastWord.split(".");
  console.log(`File name: ${lastWordSplit[0]}`);
  console.log(`File extension: ${lastWordSplit[1]}`);
}

extractFile("C:\\Internal\\training-internal\\Template.pptx");
extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
