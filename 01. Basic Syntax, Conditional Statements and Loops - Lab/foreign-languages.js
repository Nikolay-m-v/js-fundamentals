"use strict";

// Write a program, which prints the language, that a given country speaks. You can receive only the following combinations:
// English is spoken in England and USA;
// Spanish is spoken in Spain, Argentina, and Mexico;
// For the others, we should print "unknown";

function language(input) {
  if (input === "USA" || input === "England") {
    console.log("English");
  } else if (input === "Spain" || input === "Argentina" || input === "Mexico") {
    console.log("Spanish");
  } else {
    console.log("Unknown");
  }
}

language("USA");
language("Germany");
