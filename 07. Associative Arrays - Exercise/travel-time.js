"use strict";

function travelTime(array) {
  let destinations = {};

  for (let element of array) {
    let [country, town, cost] = element.split(" > ");
    if (!destinations.hasOwnProperty(country)) {
      destinations[country] = {};
    }
    if (!destinations[country].hasOwnProperty(town)) {
      destinations[country][town] = Number.MAX_SAFE_INTEGER;
    }
    if (destinations[country].hasOwnProperty(town)) {
      if (destinations[country][town] > Number(cost)) {
        destinations[country][town] = Number(cost);
      }
    }
  }

  let sortedCountries = Object.keys(destinations).sort((a, b) =>
    a.localeCompare(b)
  );

  for (let country of sortedCountries) {
    let output = "";
    output += country + " -> ";

    let townsSortedByPrice = Object.keys(destinations[country]).sort(
      (t1, t2) => destinations[country][t1] - destinations[country][t2]
    );

    for (let town of townsSortedByPrice) {
      output += town + " -> ";
      output += destinations[country][town] + " ";
    }
    console.log(output);
  }
}

travelTime([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
