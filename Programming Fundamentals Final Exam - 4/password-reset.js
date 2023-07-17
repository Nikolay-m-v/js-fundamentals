"use strict";

function passwordReset(arr) {
  let password = arr.shift();

  while (arr[0] !== "Done") {
    let line = arr.shift().split(" ");
    let command = line[0];

    if (command === "TakeOdd") {
      let newPassword = "";
      for (let i = 1; i < password.length; i += 2) {
        newPassword += password[i];
      }
      password = newPassword;
      console.log(password);
    } else if (command === "Cut") {
      let index = Number(line[1]);
      let length = Number(line[2]);
      let start = password.substring(0, index);
      let end = password.substring(index + length);
      password = start + end;
      console.log(password);
    } else if (command === "Substitute") {
      let substring = line[1];
      let substitute = line[2];
      if (password.includes(substring)) {
        password = password.split(substring).join(substitute);
        console.log(password);
      }
    } else {
      console.log("Nothing to replace!");
    }
  }
  console.log("Your password is: " + password);
}

passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
