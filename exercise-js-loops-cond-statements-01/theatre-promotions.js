"use strict";

// A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket.
// If the given age does not fit one of the categories, you should print "Error!".
//  You can see the prices in the table below:
//  Day / Age        0 <= age <= 18       18 < age <= 64        64 < age <= 122
//  Weekday               12$                   18$                   12$
//  Weekend               15$                   20$                   15$
//  Holiday               5$                    12$                   10$

function theatrePromotions(input) {
  let typeOfDay = String(input[0]);
  let ageOfPerson = Number(input[1]);
  let priceTicket = 0;

  if (typeOfDay === "Weekday") {
    if (ageOfPerson >= 0 && ageOfPerson <= 18) {
      priceTicket = 12;
    } else if (ageOfPerson > 18 && ageOfPerson <= 64) {
      priceTicket = 18;
    } else if (ageOfPerson > 64 && ageOfPerson <= 122) {
      priceTicket = 12;
    } else {
      console.log("Error!");
    }
  } else if (typeOfDay === "Weekend") {
    if (ageOfPerson >= 0 && ageOfPerson <= 18) {
      priceTicket = 15;
    } else if (ageOfPerson > 18 && ageOfPerson <= 64) {
      priceTicket = 20;
    } else if (ageOfPerson > 64 && ageOfPerson <= 122) {
      priceTicket = 15;
    } else {
      console.log("Error!");
    }
  } else if (typeOfDay === "Holiday") {
    if (ageOfPerson >= 0 && ageOfPerson <= 18) {
      priceTicket = 5;
    } else if (ageOfPerson > 18 && ageOfPerson <= 64) {
      priceTicket = 12;
    } else if (ageOfPerson > 64 && ageOfPerson <= 122) {
      priceTicket = 10;
    } else {
      console.log("Error!");
    }
  }
  if (priceTicket > 0) {
    console.log("Ticket price: " + priceTicket + "$");
  }
}

theatrePromotions(["Weekday", "42"]);
theatrePromotions(["Weekend", "77"]);
theatrePromotions(["Weekday", "133"]);
