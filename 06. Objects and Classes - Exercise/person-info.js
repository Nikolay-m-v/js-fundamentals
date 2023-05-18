"use strict";

function personInfo(fname, lname, age) {
  let personObject = {
    firstName: fname,
    lastName: lname,
    age: Number(age),
  };
  console.log(personObject);
}

personInfo("Peter", "Pan", "20");
