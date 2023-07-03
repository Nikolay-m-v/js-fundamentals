"use strict";

function reception(input) {
  let studentsCount = Number(input.pop());
  let employeeOne = Number(input.shift());
  let employeeTwo = Number(input.shift());
  let employeeThree = Number(input.shift());
  let hoursNeeded = 0;

  let studentsPerHour = employeeOne + employeeTwo + employeeThree;

  while (studentsCount > 0) {
    studentsCount -= studentsPerHour;
    hoursNeeded++;
    if (hoursNeeded % 4 === 0) {
      hoursNeeded++;
    }
  }
  console.log(`Hours needed: ${hoursNeeded}`);
}

reception(["5", "6", "4", "20"]);
reception(["1", "2", "3", "45"]);
