"use strict";

// Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder.
// The input comes as a single number parameter. The bounders are:
// 0-2 (age) – is a baby;
// 3-13 (age) – is a child;
// 14-19 (age) – is a teenager;
// 20-65 (age) – is an adult;
// >=66 (age) – is an elder;
// In all other cases print – "out of bounds";

function age(age) {
  let personAge = age;

  if (personAge < 0) {
    console.log("out of bounds");
  } else if (personAge >= 0 && personAge <= 2) {
    console.log("baby");
  } else if (personAge >= 3 && personAge <= 13) {
    console.log("child");
  } else if (personAge >= 14 && personAge <= 19) {
    console.log("teenager");
  } else if (personAge >= 20 && personAge <= 65) {
    console.log("adult");
  } else if (personAge > 66) {
    console.log("elder");
  }
}

age(["-1"]);
