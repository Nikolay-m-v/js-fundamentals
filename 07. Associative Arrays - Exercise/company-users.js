"use strict";

function companyUsers(array) {
  let companies = {};

  for (let element of array) {
    let [company, user] = element.split(" -> ");
    if (!companies.hasOwnProperty(company)) {
      companies[company] = [];
    }
    if (!companies[company].includes(user)) {
      companies[company].push(user);
    }
  }

  let sorted = Object.keys(companies).sort();
  for (let company of sorted) {
    console.log(company);
    for (let user of companies[company]) {
      console.log(`-- ${user}`);
    }
  }
}

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
