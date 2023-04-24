"use strict";

function poundToDollars(number) {
  let oneBritishPound = 1.31;
  let pounds = number;
  let dollars = pounds * oneBritishPound;
  console.log(dollars.toFixed(3));
}

poundToDollars(80);
poundToDollars(39);
