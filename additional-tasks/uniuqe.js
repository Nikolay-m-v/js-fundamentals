"use strict";

function unique(input) {
  let uniq = [...new Set(input)];

  console.log(uniq);
}

unique([1, 2, 3, 1, 2]);
