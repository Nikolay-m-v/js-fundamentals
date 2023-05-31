"use strict";

function matchName(names) {
  let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
  let validNames = [];
  let validName = pattern.exec(names);

  while (validName !== null) {
    validNames.push(validName[0]);
    validName = pattern.exec(names);
  }

  console.log(validNames.join(" "));
}

matchName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
