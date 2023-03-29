"use strict";

function login(input) {
  let userName = String(input[0]);
  let password = userName.split("").reverse().join("");
  let wrongTries = 0;

  for (let i = 1; i < input.length; i++) {
    let currentPassword = input[i];
    if (currentPassword === password) {
      console.log("User " + userName + " logged in.");
    } else {
      wrongTries++;
      console.log("Incorrect password. Try again");
    }
    if (wrongTries === 4) {
      console.log("User " + userName + " has been blocked!");
      break;
    }
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
login(["momo", "omom"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
