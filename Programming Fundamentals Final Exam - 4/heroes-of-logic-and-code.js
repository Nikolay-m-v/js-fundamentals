"use strict";

function solution(arr) {
  let numberOfHeroes = Number(arr.shift());
  let heroOne = arr.shift().split(" ");
  let heroOneName = heroOne[0];
  let heroOneHp = Number(heroOne[1]);
  let heroOneMp = Number(heroOne[2]);
  let heroTwo = arr.shift().split(" ");
  let heroTwoName = heroTwo[0];
  let heroTwoHp = Number(heroTwo[1]);
  let heroTwoMp = Number(heroTwo[2]);

  while (arr[0] !== "End") {
    let actions = arr.shift().split(" - ");
    if (actions[0] === "Heal") {
      if (actions[1] === heroOneName) {
        heroOneHp += Number(actions[2]);
        console.log(`${heroOneName} healed for ${actions[2]} HP!`);
        if (heroOneHp > 100) {
          heroOneHp = 100;
        }
      } else if (actions[1] === heroTwoName) {
        heroTwoHp += Number(actions[2]);
        console.log(`${heroTwoName} healed for ${actions[2]} HP!`);
        if (heroTwoHp > 100) {
          heroTwoHp = 100;
        }
      }
    } else if (actions[0] === "CastSpell") {
      let spell = actions[3];
      let mpNeeded = Number(actions[2]);
      if (actions[1] === heroOneName) {
        if (heroOneMp >= mpNeeded) {
          heroOneMp -= mpNeeded;
          console.log(
            `${heroOneName} has successfully cast ${spell} and now has ${heroOneMp} MP!`
          );
        } else {
          console.log(
            `${heroOneName} does not have enough MP to cast ${spell}`
          );
        }
      } else if (actions[1] === heroTwoName) {
        if (heroTwoMp >= mpNeeded) {
          heroTwoMp -= mpNeeded;
          console.log(
            `${heroTwoName} has successfully cast ${spell} and now has ${heroTwoMp} MP!`
          );
        } else {
          console.log(
            `${heroTwoName} does not have enough MP to cast ${spell}`
          );
        }
      }
    } else if (actions[0] === "TakeDamage") {
      let damage = Number(actions[2]);
      let attacker = actions[3];
      if (actions[1] === heroOneName) {
        heroOneHp -= damage;
        if (heroOneHp > 0) {
          console.log(
            `${heroOneName} was hit for ${damage} HP by ${attacker} and now has ${heroOneHp} HP left!`
          );
        } else {
          console.log(`${heroOneName} has been killed by ${attacker}`);
        }
      } else if (actions[1] === heroTwoName) {
        heroTwoHp -= damage;
        if (heroTwoHp > 0) {
          console.log(
            `${heroTwoName} was hit for ${damage} HP by ${attacker} and now has ${heroTwoHp} HP left!`
          );
        } else {
          console.log(`${heroTwoName} has been killed by ${attacker}`);
        }
      }
    } else if (actions[0] === "Recharge") {
      let manaToRecharge = Number(actions[2]);
      if (actions[1] === heroOneName) {
        heroOneMp += manaToRecharge;
        console.log(`${heroOneName} recharged for ${manaToRecharge} MP!`);
        if (heroOneMp > 200) {
          heroOneMp = 200;
        }
      } else if (actions[1] === heroTwoName) {
        heroOneMp += manaToRecharge;
        console.log(`${heroTwoName} recharged for ${manaToRecharge} MP!`);
        if (heroTwoMp > 200) {
          heroTwoMp = 200;
        }
      }
    }
  }
  console.log(`${heroOneName}  \n HP: ${heroOneHp} \n MP: ${heroOneMp}`);
  console.log(`${heroTwoName}  \n HP: ${heroTwoHp} \n MP: ${heroTwoMp}`);
}

solution([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
