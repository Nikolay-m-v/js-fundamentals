"use strict";

function cone(radius, height) {
  let volume = (1 / 3) * height * Math.PI * Math.pow(radius, 2);
  let area =
    Math.PI * radius * (radius + Math.sqrt(radius * radius + height * height));
  console.log(volume.toFixed(4));
  console.log(area.toFixed(4));
}

cone(3, 5);
