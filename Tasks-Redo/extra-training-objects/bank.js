"use strict";

let bankInfo = {
  owner: "Ivan",
  amount: 1000,
  age: 33,
  hasAcces: true,
  annualInterest: 0.006,
  yearsOfInterest: 0,

  suspend() {
    this.hasAcces = false;
  },

  deposit(money) {
    this.amount += money;
  },

  withdraw(money) {
    this.amount -= money;
  },

  becomeOlder() {
    this.age += 1;
  },

  interest() {
    if (this.age > 33) {
      this.yearsOfInterest = this.age - 33;
      for (let i = 1; i <= this.yearsOfInterest; i++) {
        this.amount += this.amount * this.annualInterest;
      }
    }
  },
};

bankInfo.becomeOlder();
bankInfo.deposit(500);
bankInfo.withdraw(800);
bankInfo.suspend();
bankInfo.interest();
console.log(bankInfo.age);
console.log(bankInfo.hasAcces);
console.log(bankInfo.amount);
