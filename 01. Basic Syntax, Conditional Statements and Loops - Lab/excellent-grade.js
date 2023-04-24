"use strict";

// Write a function that receives a single number and checks if the grade is excellent or not.
// If it is, print "Excellent", otherwise print "Not excellent".

function excellentGrade(input) {
  if (input >= 5.5) {
    console.log("Excellent");
  } else {
    console.log("Not excellent");
  }
}

excellentGrade(3);
