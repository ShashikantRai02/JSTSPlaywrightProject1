class SBI {
  #balance;
  constructor(name, balance) {
    this.#balance = balance;
    this.name = name;
  }
  getBalance() {
    return this.#balance;
  }
  setBalance(balance, isCashier) {
    if (isCashier) {
      this.#balance = balance;
    } else {
      console.log("Not Allowed");
    }
  }
}
let shashikant = new SBI("Shashikant", 10000);
console.log(shashikant.getBalance());
shashikant.setBalance(199239898, false);
console.log(shashikant.getBalance());

let shashikant_father = new SBI("Shashikant", "200000");
console.log(shashikant_father.getBalance());
shashikant_father.setBalance(39876546, true);
console.log(shashikant_father.getBalance());
/* 
output---
10000
Not Allowed
10000
200000
39876546
*/
