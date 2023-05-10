"use strict";

function gladiatorInventory(array) {
  let index = 0;
  let command = index++;
  let inventory = [];

  for (let i = 0; i < array.length; i++) {
    let splitInventory = inventory.split(" ");
    command = array[index++].split(" ");
    let currentCommand = command[0];
    let equipment = command[1];

    switch (currentCommand) {
      case "Buy":
        if (array.includes(equipment)) {
          continue;
        } else {
          array.push(equipment);
        }
    }
  }
  console.log(array);
}

gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
