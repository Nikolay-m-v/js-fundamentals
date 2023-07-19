"use strict";

function solution(arr) {
  let n = Number(arr.shift());

  let heroes = {};

  for (let i = 0; i < n; i++) {
    let heroData = arr.shift().split(" ");
    let name = heroData[0];
    let hp = Number(heroData[1]);
    let mp = Number(heroData[2]);
    heroes[name] = { hp, mp };
  }

  while (arr[0] !== "End") {
    let line = arr.shift().split(" - ");
    let command = line[0];
    let hero = line[1];

    if (command === "CastSpell") {
      let mpNeeded = Number(line[2]);
      let spell = line[3];
      if (heroes[hero].mp >= mpNeeded) {
        heroes[hero].mp -= mpNeeded;
        console.log(
          `${hero} has successfully cast ${spell} and now has ${heroes[hero].mp} MP!`
        );
      } else {
        console.log(`${hero} does not have enough MP to cast ${spell}`);
      }
    } else if (command === "TakeDamage") {
      let damage = Number(line[2]);
      let attacker = line[3];
      heroes[hero].hp -= damage;
      if (heroes[hero].hp > 0) {
        console.log(
          `${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`
        );
      } else {
        console.log(`${hero} has been killed by ${attacker}`);
        delete heroes[hero];
      }
    } else if (command === "Recharge") {
      let currentMp = heroes[hero].mp;
      let mpToRecharge = Number(line[2]);
      if (currentMp + mpToRecharge > 200) {
        let mpRecharged = 200 - currentMp;
        currentMp = 200;
        console.log(`${hero} recharged for ${mpRecharged} MP!`);
      } else {
        currentMp += mpToRecharge;
        console.log(`${hero} recharged for ${mpToRecharge} MP!`);
      }
    } else if (command === "Heal") {
      let currHp = heroes[hero].hp;
      let hpToHeal = Number(line[2]);
      if (currHp + hpToHeal > 100) {
        let hpHealed = 100 - currHp;
        currHp = 100;
        console.log(`${hero} healed for ${hpHealed} HP!`);
      } else {
        currHp += hpToHeal;
        console.log(`${hero} healed for ${hpToHeal} HP!`);
      }
    }
  }

  for (let hero in heroes) {
    console.log(hero);
    console.log(`  HP: ${heroes[hero].hp}`);
    console.log(`  MP: ${heroes[hero].mp}`);
  }
}

solution([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
