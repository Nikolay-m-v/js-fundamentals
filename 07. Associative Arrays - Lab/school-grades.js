"use strict";

function schoolGrades(array) {
  let studentGrades = {};

  for (let element of array) {
    let tokens = element.split(" ");
    let student = tokens.shift();
    let grades = tokens.map(Number);

    if (!studentGrades.hasOwnProperty(student)) {
      studentGrades[student] = [];
    }

    let existing = studentGrades[student];
    grades.map((x) => existing.push(x));
  }

  let sorted = Object.entries(studentGrades);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));

  for (let [name, grades] of sorted) {
    let average = 0;
    grades.map((x) => (average += x));
    average /= grades.length;
    console.log(`${name}: ${average.toFixed(2)}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
