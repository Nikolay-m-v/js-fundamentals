"use strict";

function gladiatorInventory(array) {
  let index = 0;
  let command = array[index++];
  let inventory = [];
  inventory = array[0].split(" ");

  for (let i = 1; i < array.length; i++) {
    let splitCommand = array[i].split(" ");
    let currentCommand = splitCommand[0];
    let equipment = splitCommand[1];

    switch (currentCommand) {
      case "Buy":
        if (array.includes(equipment)) {
          continue;
        } else {
          inventory.push(equipment);
        }
        break;
      case "Trash":
        if (inventory.includes(equipment)) {
          let indexOfElement = inventory.indexOf(equipment);
          inventory.splice(indexOfElement, 1);
        }
        break;
      case "Repair":
        if (inventory.includes(equipment)) {
          let indexOfElement = inventory.indexOf(equipment);
          inventory.splice(indexOfElement, 1);
          inventory.push(equipment);
        }
        break;
      case "Upgrade":
        let upgrade = equipment.split("-");
        if (inventory.includes(upgrade[0])) {
          let shifted = inventory.shift(equipment);
          inventory.unshift(equipment);
          inventory.unshift(shifted);
        }
    }
  }
  console.log(inventory);
}

gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
gladiatorInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
