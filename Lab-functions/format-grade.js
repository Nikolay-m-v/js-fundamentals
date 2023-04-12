"use strict";

function formatGrade(grade) {
  if (grade < 3.0) {
    console.log("Fail");
  } else if (grade >= 3.0 && grade < 3.5) {
    console.log("Poor");
  } else if (grade >= 3.5 && grade < 4.5) {
    console.log("Good");
  } else if (grade >= 4.5 && grade < 5.5) {
    console.log("Very good");
  } else {
    console.log("Excellent");
  }
}

formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);
