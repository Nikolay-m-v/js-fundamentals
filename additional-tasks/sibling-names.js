"use strict";

function siblingNames() {
  let arr1 = ["Wesko", "Miro", "Elka"];
  let arr2 = ["Pamela", "William"];
  let array = arr1.concat(arr2);
  let pet = "Ragnar";
  array.reverse();

  array.push(pet);

  console.log(array);
  return array;
}
siblingNames();
