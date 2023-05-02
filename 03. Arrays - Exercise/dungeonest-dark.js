"use strict";

function dungeon(array) {
  let health = 100;
  let initialHealth = 100;
  let stillAlive = true;
  let coins = 0;
  let currentRoom = 0;
  let allRooms = array[0].split("|");

  for (let i = 0; i < allRooms.length; i++) {
    currentRoom++;
    let room = allRooms[i].split(" ");

    if (room[0] === "potion") {
      let takenPotion = Number(room[1]);
      if (health <= 100) {
        if (health + takenPotion >= 100) {
          takenPotion = 100 - health;
          health = 100;
        } else {
          health += takenPotion;
        }
      }
      console.log(`You healed for ${takenPotion} hp.`);
      console.log(`Current health: ${health} hp.`);
      if (health > 100) {
        health = 100;
      }
    } else if (room[0] === "chest") {
      coins += Number(room[1]);
      console.log(`You found ${coins} coins.`);
    } else {
      health -= Number(room[1]);
      if (health > 0) {
        console.log(`You slayed ${room[0]}.`);
      } else if (health <= 0) {
        stillAlive = false;
        console.log(`You died! Killed by ${room[0]}.`);
        console.log(`Best room ${currentRoom}.`);
        break;
      }
    }
  }
  if (stillAlive) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
