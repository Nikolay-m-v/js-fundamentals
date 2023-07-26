"use strict";

let cat = {
  name: "Ragnar",
  age: 6,
  breed: "TurkishAngorish",
};

let owner = {};

owner.name = "Nikolay";
owner.age = 29;
owner.isMale = true;

function objectTraining(firstName, lastName, age) {
  let result = {
    name: firstName,
    lastName: lastName,
    age: age,
  };
  console.log(result);
}

objectTraining("Ivan", "Ivanov", 20);
