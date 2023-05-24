"use strict";

function minerTask(array) {
  let resources = {};

  for (let i = 0; i < array.length; i += 2) {
    let [resource, quantity] = [array[i], array[i + 1]];
    !resources.hasOwnProperty(resource)
      ? (resources[resource] = Number(quantity))
      : (resources[resource] += Number(quantity));
  }
  for (let resource in resources) {
    console.log(`${resource} -> ${resources[resource]}`);
  }
}

minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
