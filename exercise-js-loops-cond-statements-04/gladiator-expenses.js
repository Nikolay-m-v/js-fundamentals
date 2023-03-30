"use strict";

function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let helmetRepairCost = helmetPrice;
  let swordRepairCost = swordPrice;
  let shieldRepairCost = shieldPrice;
  let armorRepairCost = armorPrice;
  let currentGame = 0;
  let brokenHelmet = 0;
  let brokenSword = 0;
  let brokenShield = 0;
  let brokenArmor = 0;

  for (let i = 1; i <= lostFights; i++) {
    let helmetBreak = false;
    let swordBreak = false;
    let brokenArmorBoo = false;
    currentGame++;
    if (currentGame % 2 === 0) {
      helmetBreak = true;
    }
    if (currentGame % 3 === 0) {
      swordBreak = true;
    }
    if (helmetBreak) {
      brokenHelmet++;
    }
    if (swordBreak) {
      brokenSword++;
    }
    if (helmetBreak && swordBreak) {
      brokenShield++;
      if (brokenShield % 2 === 0 && brokenShield > 1) {
        brokenArmorBoo = true;
      }
      if (brokenArmorBoo) {
        brokenArmor++;
      }
    }
  }
  let sum =
    brokenHelmet * helmetRepairCost +
    brokenSword * swordRepairCost +
    brokenShield * shieldRepairCost +
    brokenArmor * armorRepairCost;
  console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
