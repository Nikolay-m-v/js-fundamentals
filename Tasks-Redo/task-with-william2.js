"use strict";

// Niki has to feed his cat, also Niki has to give the cat water,
// The cat (Ragnar) can make three sounds "meow", "rawr", "meeew"
// Each sound means something :
// meow is hungry
// rawr is angry
// meeew is thirsty
// the cat at any point in time is in the following states:
// hungry, thirsty, angry or happy
// the person can:
// feed the cat, pet the cat, give the cat water
// he can only do that based on the sound the cat makes
// everytime the cat makes a sound, Niki has to respond to satisfy the cat needs

const person = {
  pet(cat) {
    cat.respondToAction("petting");
  },

  feed(cat) {
    cat.respondToAction("fed");
  },

  giveWater(cat) {
    cat.respondToAction("water");
  },

  respondToSound(cat) {
    if (cat.currentSound === "meow") {
      this.feed(cat);
    } else if (cat.currentSound === "rawr") {
      this.pet(cat);
    } else if (cat.currentSound === "meeew") {
      this.giveWater(cat);
    }
  },
};

const cat = {
  emotionalState: "normal",
  isHungry: false,
  isThirsty: false,
  currentSound: "none",

  makeSound(state) {
    if (state === "hungry") {
      this.currentSound = "meow";
      this.isHungry = true;
    } else if (state === "thirsty") {
      this.currentSound = "meeew";
      this.isThirsty = true;
    } else {
      this.currentSound = "rawr";
      this.emotionalState = "angry";
    }
  },

  respondToAction(action) {
    if (action === "petting") {
      this.emotionalState = "happy";
    } else if (action === "fed") {
      this.eat();
    } else if (action === "water") {
      this.drink();
    }
  },

  eat() {
    setTimeout(() => {
      this.emotionalState = "happy";
      this.isHungry = false;
    }, 1000);
  },

  drink() {
    setTimeout(() => {
      this.emotionalState = "happy";
      this.isThirsty = false;
    }, 2000);
  },
};

cat.makeSound("hungry");

cat.makeSound("angry");

cat.makeSound("thirsty");

console.log(cat);

person.respondToSound(cat);

setTimeout(() => {
  console.log(cat);
}, 3000);
