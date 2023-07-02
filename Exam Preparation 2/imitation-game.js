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
    }
  }
}

imitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
