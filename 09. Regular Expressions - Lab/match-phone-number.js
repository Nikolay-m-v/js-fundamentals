"use strict";

function matchPhoneNumber(numbers) {
  let pattern = /(?:\s|^)\+359( |-)2\1\d{3}\1\d{4}\b/g;

  let match = pattern.exec(numbers);
  let validPhones = [];

  while (match !== null) {
    validPhones.push(match[0].trim());
    match = pattern.exec(numbers);
  }

  console.log(validPhones.join(", "));
}

matchPhoneNumber(
  "+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"
);
