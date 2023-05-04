"use strict";

function sortByCriteria(array) {
  let sortByLength = array.sort(
    (a, b) => a.length - b.length || a.localeCompare(b)
  );

  console.log(sortByLength.join("\n"));
}

sortByCriteria(["alpha", "beta", "gamma"]);
sortByCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
