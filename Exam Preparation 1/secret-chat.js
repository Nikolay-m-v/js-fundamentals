"use strict";

function secretChat(input) {
  let message = input.shift();

  while (input[0] !== "Reveal") {
    let line = input.shift().split(":|:");
    let command = line[0];

    if (command === "InsertSpace") {
      let index = line[1];
      let firstHalf = message.substring(0, index);
    }
  }
}

secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
