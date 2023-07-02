"use strict";

function imitationGame(input) {
  let message = input.shift();

  while (input[0] !== "Decode") {
    let line = input.shift().split("|");
    let command = line[0];

    if (command === "Move") {
      let n = Number(line[1]);
      let start = message.substring(0, n);
      let end = message.substring(n);
      message = end + start;
    } else if (command === "Insert") {
      let index = Number(line[1]);
      let value = line[2];
      let leftHalf = message.substring(0, index);
      let rightHalf = message.substring(index);
      message = leftHalf + value + rightHalf;
    } else if ((command = "ChangeAll")) {
      let substring = line[1];
      let replacement = line[2];
      message = message.split(substring).join(replacement);
    }
  }

  console.log(`The decrypted message is: ${message}`);
}

imitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
