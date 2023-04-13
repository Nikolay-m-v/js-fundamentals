"use strict";

function passwordValidator(input) {
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  const regex = /[0-9].*[0-9]/;
  let valid = false;
  if (specialChars.test(input)) {
    console.log("Password must consist only of letters and digits");
    valid = false;
    return;
  } else {
    valid = true;
  }
  if (regex.test(input)) {
    valid = true;
  } else {
    console.log("Password must have at least 2 digits");
    valid = false;
    return;
  }
  if (input.length < 6 || input.length > 10) {
    console.log("Password must be between 6 and 10 characters");
    valid = false;
    return;
  } else {
    valid = true;
  }

  if (valid) {
    console.log("Password is valid");
  }
}

passwordValidator("login");
passwordValidator("Mypass123");
passwordValidator("Pa$s$s");
