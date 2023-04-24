"use strict";

const companies = ["apple", "tesla", "spacex", "amazon", "meta", "google"];

const modded = companies.reduce((result, company, i) => {
  if (company.startsWith("a")) {
    return result;
  }
  if (i === companies.length - 1) {
    return result + company;
  }
  return result + company + "-";
}, "");

console.log(companies);
console.log(modded);
