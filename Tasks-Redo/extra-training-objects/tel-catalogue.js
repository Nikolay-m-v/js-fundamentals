"use strict";

function catalogue(contacts) {
  let phoneCatalogue = {};

  for (const contact of contacts) {
    let firstSpaceIndex = contact.indexOf(" ");
    let name = contact.substring(0, firstSpaceIndex);
    let number = contact.substring(firstSpaceIndex + 1);

    phoneCatalogue[name] = number;
  }

  for (let name in phoneCatalogue) {
    console.log(`${name} -> ${phoneCatalogue[name]}`);
  }
}

catalogue(["Peter 088 657 212", "Bob 0899 656 323", "Peter 1233321"]);
