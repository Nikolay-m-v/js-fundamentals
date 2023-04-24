"use strict";

function vacation(input) {
  let amountOfPeople = Number(input[0]);
  let typeOfGroup = String(input[1]);
  let dayOfWeek = String(input[2]);
  let pricePerNight = 0;
  let totalPrice = 0;

  if (dayOfWeek === "Friday") {
    if (typeOfGroup === "Students") {
      pricePerNight = 8.45;
      if (amountOfPeople >= 30) {
        pricePerNight -= pricePerNight * 0.15;
      }
    } else if (typeOfGroup === "Business") {
      pricePerNight = 10.9;
      if (amountOfPeople >= 100) {
        amountOfPeople -= 10;
      }
    } else if (typeOfGroup === "Regular") {
      pricePerNight = 15;
      if (amountOfPeople >= 10 && amountOfPeople <= 20) {
        pricePerNight -= pricePerNight * 0.05;
      }
    }
  } else if (dayOfWeek === "Saturday") {
    if (typeOfGroup === "Students") {
      pricePerNight = 9.8;
      if (amountOfPeople >= 30) {
        pricePerNight -= pricePerNight * 0.15;
      }
    } else if (typeOfGroup === "Business") {
      pricePerNight = 15.6;
      if (amountOfPeople >= 100) {
        amountOfPeople -= 10;
      }
      pricePerNight = 10.9;
    } else if (typeOfGroup === "Regular") {
      pricePerNight = 20;
      if (amountOfPeople >= 10 && amountOfPeople <= 20) {
        pricePerNight -= pricePerNight * 0.05;
      }
    }
  } else if (dayOfWeek === "Sunday") {
    if (typeOfGroup === "Students") {
      pricePerNight = 10.46;
      if (amountOfPeople >= 30) {
        pricePerNight -= pricePerNight * 0.15;
      }
    } else if (typeOfGroup === "Business") {
      pricePerNight = 16;
      if (amountOfPeople >= 100) {
        amountOfPeople -= 10;
      }
      pricePerNight = 10.9;
    } else if (typeOfGroup === "Regular") {
      pricePerNight = 22.5;
      if (amountOfPeople >= 10 && amountOfPeople <= 20) {
        pricePerNight -= pricePerNight * 0.05;
      }
    }
  }
  totalPrice = amountOfPeople * pricePerNight;
  console.log("Total price: " + totalPrice.toFixed(2));
}

vacation(["30", "Students", "Sunday"]);
vacation(["40", "Regular", "Saturday"]);
