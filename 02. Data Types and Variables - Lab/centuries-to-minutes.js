"use strict";

function centuries(number) {
  let centuries = number;
  let years = centuries * 100;
  let days = Math.trunc(years * 365.2422);
  let hours = 24 * days;
  let minutes = 60 * hours;

  console.log(
    `${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`
  );
}

centuries(1);
centuries(5);
