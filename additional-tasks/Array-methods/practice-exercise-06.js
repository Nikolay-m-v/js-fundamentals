"use strict";

const countries = [
  "France",
  "South Africa",
  "Brazil",
  "United States",
  "Sweden",
];

let filteredCountries = countries.filter((country) => {
  if (country.includes(" ")) {
    return true;
  }
  return false;
});

console.log(countries);
console.log(filteredCountries);
