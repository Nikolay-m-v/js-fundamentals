"use strict";

function information(name, age, grade) {
  let studentGrade = Number(grade).toFixed(2);
  let studentAge = Number(age);
  console.log(`Name: ${name}, Age: ${studentAge}, Grade: ${studentGrade}`);
}

information("John", "15", "5.54678");
