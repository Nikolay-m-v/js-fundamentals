"use strict";

function age(number) {
  if (number > 0 && number <= 2) {
    console.log("baby");
  } else if (number > 2 && Number <= 13) {
    console.log("child");
  } else if (number > 13 && number <= 19) {
    console.log("teenager");
  } else if (number > 19 && number <= 65) {
    console.log("adult");
  } else {
    console.log("Out of bounds");
  }
}

age("20");
age("2");
age("77");
