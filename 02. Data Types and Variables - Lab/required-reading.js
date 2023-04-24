"use strict";

function reading(num1, num2, num3) {
  let pages = num1;
  let pagesPerHour = num2;
  let daysToRead = num3;
  let totalHoursNeeded = pages / pagesPerHour;
  let hoursPerDay = totalHoursNeeded / daysToRead;

  console.log(hoursPerDay);
}

reading(212, 20, 2);
reading(432, 15, 4);
