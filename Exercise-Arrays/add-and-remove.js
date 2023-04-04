"use strict";

function addOrRemove(array) {
  let output = [];
  for (let i = 1; i <= array.length; i++) {
    if (array[i - 1] === "add") {
      output.push(i);
    } else {
      output.pop();
    }
  }
  if (output.length === 0) {
    console.log("Empty");
  } else {
    console.log(output.join(" "));
  }
}

addOrRemove(["add", "add", "add", "add"]);
addOrRemove(["add", "add", "remove", "add", "add"]);
addOrRemove(["remove", "remove", "remove"]);
