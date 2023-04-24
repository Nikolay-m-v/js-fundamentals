"use strict";

function loadingBar(n) {
  let progress = "..........";
  let completed = Math.floor(n / 10);
  let loading = progress.slice(0, completed).replace(/\./g, "%");

  if (completed === 10) {
    console.log("100% complete");
    console.log(`[${loading}]`);
  } else {
    console.log(`${n}% [${loading}${progress.slice(completed)}]`);
    console.log("still loading");
  }
}

loadingBar(70);
