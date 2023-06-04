"use strict";

function convertToJSON(firstName, lastName, hairColor) {
  let personInfo = {
    Name: firstName,
    lastName: lastName,
    hairColor: hairColor,
  };

  console.log(JSON.stringify(personInfo));
}

convertToJSON("George", "Jones", "Brown");
