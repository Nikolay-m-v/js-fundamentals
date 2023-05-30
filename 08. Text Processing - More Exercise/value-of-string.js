"use strict";

function valueOfString(array) {
  let [word, type] = array;
  let sum = 0;

  for (let i = 0; i < word.length; i++) {
    let currLetter = word[i];
    if (type === "LOWERCASE") {
      if (currLetter.toLocaleLowerCase() === currLetter) {
        sum += currLetter.charCodeAt();
      }
    } else if (type === "UPPERCASE") {
      if (currLetter.toLocaleUpperCase() === currLetter) {
        sum += currLetter.charCodeAt();
      }
    }
  }
  console.log(`total sum is: ${sum}`);
}

valueOfString(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
