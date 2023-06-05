"use strict";

function inventory(input) {
  let heroesInfo = [];

  for (let lines of input) {
    let heroInfo = lines.split(" / ");
    let heroName = heroInfo[0];
    let heroLevel = Number(heroInfo[1]);
    let heroItems = heroInfo[2];
    let heroObject = {
      name: heroName,
      level: heroLevel,
      items: heroItems,
    };
    heroesInfo.push(heroObject);
  }

  heroesInfo.sort((a, b) => a.level - b.level);

  for (let hero of heroesInfo) {
    console.log(`Hero: ${hero.name}`);
    console.log(`Level: ${hero.level}`);
    console.log(`items: ${hero.items}`);
  }
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
