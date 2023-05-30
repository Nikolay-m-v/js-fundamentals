"use strict";

function treasureFinder(input) {
  let key = input.shift().split(" ");

  while (input[0] !== "find") {
    let string = input.shift();
    let decrypted = "";
    let count = 0;

    while (count < string.length) {
      for (let j = 0; j < key.length; j++) {
        if (count === string.length) {
          break;
        }
        let currentNumber = Number(key[j]);
        let currentChar = string[count].charCodeAt();
        count++;
        let decryptedChar = String.fromCharCode(currentChar - currentNumber);
        decrypted += decryptedChar;
      }
    }

    let firstIndexType = decrypted.indexOf("&");
    let lastIndexType = decrypted.lastIndexOf("&");
    let typeTreasure = decrypted.substring(firstIndexType + 1, lastIndexType);
    let firstIndexCoordinates = decrypted.indexOf("<");
    let lastIndexCoordinates = decrypted.lastIndexOf(">");
    let coordinates = decrypted.substring(
      firstIndexCoordinates + 1,
      lastIndexCoordinates
    );
    console.log(`Found ${typeTreasure} at ${coordinates}`);
  }
}

treasureFinder([
  "1 2 1 3",
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  "find",
]);
