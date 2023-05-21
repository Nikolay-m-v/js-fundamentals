"use strict";

function browserHistory(object, array) {
  for (let command of array) {
    let action = command.split(" ")[0];
    let site = command.split(" ")[1];

    switch (action) {
      case "Open":
        object["Open Tabs"].push(site);
        object["Browser Logs"].push(command);
        break;

      case "Close":
        if (object["Open Tabs"].includes(site)) {
          object["Browser Logs"].push(command);
          object["Recently Closed"].push(site);
          let index = object["Open Tabs"].indexOf(site);
          object["Open Tabs"].splice(index, 1);
        }
        break;

      case "Clear":
        object["Open Tabs"] = [];
        object["Recently Closed"] = [];
        object["Browser Logs"] = [];
        break;
    }
  }

  console.log(object["Browser Name"]);
  console.log(`Open Tabs: ${object["Open Tabs"].join(", ")}`);
  console.log(`Recently Closed: ${object["Recently Closed"].join(", ")}`);
  console.log(`Browser Logs: ${object["Browser Logs"].join(", ")}`);
}

browserHistory(
  {
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": [
      "Open YouTube",
      "Open Yahoo",
      "Open Google Translate",
      "Close Yahoo",
      "Open Gmail",
      "Close Gmail",
      "Open Facebook",
    ],
  },
  ["Close Facebook", "Open StackOverFlow", "Open Google"]
);
