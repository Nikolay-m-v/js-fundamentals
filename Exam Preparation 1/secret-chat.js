"use strict";

function secretChat(input) {
  let message = input.shift();

  while (input[0] !== "Reveal") {
    let line = input.shift().split(":|:");
    let command = line[0];

    if (command === "InsertSpace") {
      let index = line[1];
      let firstHalf = message.substring(0, index);
      let secondHalf = message.substring(index);
      message = firstHalf + " " + secondHalf;
      console.log(message);
    } else if (command === "Reverse") {
      let substring = line[1];
      if (!message.includes(substring)) {
        console.log("error");
      } else {
        let index = message.indexOf(substring);
        let firstHalf = message.substring(0, index);
        let secondHalf = message.substring(index + substring.length);
        message =
          firstHalf + secondHalf + substring.split("").reverse().join("");
        console.log(message);
      }
    } else if (command === "ChangeAll") {
      let occurences = line[1];
      let replacement = line[2];
      message = message.split(occurences).join(replacement);
      console.log(message);
    }
  }
  console.log(`You have a new text message ${meessage}`);
}

secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
