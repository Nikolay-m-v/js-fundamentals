"use strict";

// You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on that information calculate how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person.
// The output should look like that: `Total price: {price}`.The price should be formatted to the second decimal point.

function vacation(amountOfClients, typeOfGroup, dayOfStay) {
  let totalSum = 0;

  if (dayOfStay === "Friday") {
    if (typeOfGroup === "Students") {
      totalSum = amountOfClients * 8.45;
    } else if (typeOfGroup === "Business") {
      totalSum = amountOfClients * 10.9;
    } else if (typeOfGroup === "Regular") {
      totalSum = amountOfClients * 15;
    }
  } else if (dayOfStay === "Saturday") {
    if (typeOfGroup === "Students") {
      totalSum = amountOfClients * 9.8;
    } else if (typeOfGroup === "Business") {
      totalSum = amountOfClients * 15.6;
    } else if (typeOfGroup === "Regular") {
      totalSum = amountOfClients * 20;
    }
  } else if (dayOfStay === "Sunday") {
    if (typeOfGroup === "Students") {
      totalSum = amountOfClients * 10.46;
    } else if (typeOfGroup === "Business") {
      totalSum = amountOfClients * 16;
    } else if (typeOfGroup === "Regular") {
      totalSum = amountOfClients * 22.5;
    }
  }

  if (amountOfClients >= 30 && typeOfGroup === "Students") {
    totalSum = totalSum - totalSum * 0.15;
  } else if (amountOfClients >= 100 && typeOfGroup === "Business") {
    totalSum = totalSum - (totalSum / amountOfClients) * 10;
  } else if (
    amountOfClients >= 10 &&
    amountOfClients <= 20 &&
    typeOfGroup === "Regular"
  ) {
    totalSum = totalSum * 0.95;
  }

  console.log("Total price: " + totalSum.toFixed(2));
}

vacation(10, "Students", "Friday");
