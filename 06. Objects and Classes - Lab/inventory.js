"use strict";

function inventory(array) {
  let listOfHeroes = [];

  for (let element of array) {
    let currentElement = element.split(" / ");
    let currentHeroName = currentElement[0];
    let currentHeroLevel = Number(currentElement[1]);
    let currentHeroItems = currentElement[2];
    let heroObject = {
      name: currentHeroName,
      level: currentHeroLevel,
      items: currentHeroItems,
    };
    listOfHeroes.push(heroObject);
  }

  listOfHeroes.sort((a, b) => a.level - b.level);

  for (let hero of listOfHeroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level: ${hero.level}`);
    console.log(`items: ${hero.items}`);
  }
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
