"use strict";

let bankInfo = {
  owner: "Ivan",
  amount: 1000,
  hasAcces: true,

  suspend() {
    this.hasAcces = false;
  },

  deposit(money) {
    this.amount += money;
  },

  withdraw(money) {
    this.amount -= money;
  },
};

bankInfo.deposit(500);
bankInfo.withdraw(800);
bankInfo.suspend();
console.log(bankInfo.hasAcces);
