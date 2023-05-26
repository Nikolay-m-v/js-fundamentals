"use strict";

function meetings(array) {
  let meetingsRecord = {};

  for (let element of array) {
    let [day, name] = element.split(" ");
    if (!meetingsRecord.hasOwnProperty(day)) {
      meetingsRecord[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}`);
    }
  }

  for (let day in meetingsRecord) {
    console.log(`${day} -> ${meetingsRecord[day]}`);
  }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
