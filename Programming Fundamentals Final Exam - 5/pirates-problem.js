"use strict";

function pirates(input) {
  let cities = {};
  while (input[0] !== "Sail") {
    let line = input.shift().split("||");
    let town = line[0];
    let population = Number(line[1]);
    let gold = Number(line[2]);
    if (cities.hasOwnProperty(town)) {
      cities[town].population += population;
      cities[town].gold += gold;
    } else {
      cities[town] = { population, gold };
    }
  }

  while (input[0] !== "End") {
    let line = input.shift().split("=>");
    let command = line[0];
    let town = line[1];
    if (command === "Plunder") {
      let population = Number(line[2]);
      let gold = Number(line[3]);
      cities[town].population -= population;
      cities[town].gold -= gold;
      console.log(
        `${town} plundered! ${gold} gold stoen, ${population} killed.`
      );
      if (cities[town].population <= 0 || cities[town].gold <= 0) {
        console.log(`${town} has been wiped off the map.`);

        delete cities[town];
      }
    } else if (command === "Prosper") {
      let town = line[1];
      let gold = Number(line[2]);
      if (gold < 0) {
        console.log(`Gold cannot be a negative number!`);
      } else {
        cities[town].gold += gold;
        console.log(
          `${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`
        );
      }
    }
  }

  let count = Object.keys(cities).length;
  if (count !== 0) {
    console.log(
      `Ahoy, Captain! There are ${count} wealthy settlements to go to:`
    );
    for (let town in cities) {
      console.log(
        `${town} -> Population: ${cities[town].population} citizens, Gold: ${cities[town].gold} kg`
      );
    }
  } else {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  }
}

pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
