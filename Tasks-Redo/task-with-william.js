"use strict";

/**
 * 1. Make a human object named Joe. Joe has first name, last name, age and can do the following things: giveCommand, giveTreats, giveCompliments.
 * 2. Make a dog object named Barry. Barry has a name, age and breed, gender, position in space ("sitting", "standing", "lying", "jumping", "rolling"), facial expression ("happy", "confused", normal"), makeSound ("woof", "bark", "chew") - Woof means "give me treats", bark means give me compliments.
 * 3. Joe can give Barry commands. Based on the command Barry will produce a specific sound.
 * 4. The commands are the following:
 * Sit, which changes Barry's position to "sitting"
 * Stand, which changes Barry's position to "standing" but only if it was "lying" or "sitting" otherwise Barry will look confused.
 * Lay down, which changes Barry's position to laying down if it was not laying down already otherwise Barry will just look confused.
 * Jump, which changes Barry's position to "jumping" and his expression to "happy".
 * Roll, which changes Barry's position to "rolling" and his expression to "happy".
 * If Barry is in a position but you give him a command to go into the same position, he will look confused.
 */

const joe = {
  firstName: "Joe",
  lastName: "Mama",
  age: 29,

  giveCompliments(dog) {
    if (dog.gender === "male") {
      console.log("Good boy!");
    } else if (dog.gender === "female") {
      console.log("Good girl!");
    }

    dog.facialExpression = "happy";
  },

  giveTreats(dog) {
    this.giveCompliments(dog);
  },

  understandSound(dog) {
    switch (dog.sound) {
      case "woof woof":
        this.giveTreats(dog);
        dog.makeSoundFor("nothing");
        break;
      case "bark":
        this.giveCompliments(dog);
        dog.makeSoundFor("nothing");
        break;
      case "noone":
      default:
        return;
    }
  },

  giveCommand(dog, command) {
    switch (command) {
      case "sit":
        dog.sit();
        break;
      case "stand":
        dog.stand();
        break;
      case "lay down":
        dog.layDown();
        break;
      case "roll":
        dog.roll();
        break;
      case "jump":
        dog.jump();
        break;
      default:
        this.giveCompliments(dog);
    }
  },
};

const barry = {
  name: "Barry",
  age: 4,
  breed: "German Shepherd",
  gender: "male",
  positionInSpace: "standing",
  facialExpression: "normal",
  sound: "none",

  makeSoundFor(desire) {
    switch (desire) {
      case "compliments":
        this.sound = "bark";
        break;
      case "treats":
        this.sound = "woof woof";
        break;
      default:
        this.sounds = "none";
    }
  },

  sit() {
    if (this.positionInSpace === "sitting") {
      this.facialExpression = "confused";
      return;
    }

    this.positionInSpace = "sitting";
  },

  stand() {
    if (this.positionInSpace === "standing") {
      this.facialExpression = "confused";
      return;
    }
    this.positionInSpace = "standing";
  },

  layDown() {
    if (this.positionInSpace === "lying") {
      this.facialExpression = "confused";
      return;
    }

    this.positionInSpace = "lying";
  },

  jump() {
    if (this.positionInSpace === "jumping") {
      this.facialExpression = "confused";
      return;
    }
    this.positionInSpace = "jumping";
    this.facialExpression = "happy";
  },

  roll() {
    if (this.positionInSpace === "rolling") {
      this.facialExpression = "confused";
      return;
    }
    this.positionInSpace = "rolling";
    this.facialExpression = "happy";
  },
};

barry.makeSoundFor("treats");
joe.understandSound(barry);

console.log(barry);
