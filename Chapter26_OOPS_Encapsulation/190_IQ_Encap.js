class Testcase {
  #status = "not run";
  static #count = 0;
  constructor(name) {
    this.name = name;
    Testcase.#count++;
  }
  run(pass) {
    this.#status = pass ? "PASSED" : "FAILED";
  }
  getStatus() {
    return this.#status;
  }
  static getCount() {
    return Testcase.#count;
  }
  static setCount(v) {
    Testcase.#count = v;
  }
}
const tc = new Testcase("Login");
tc.run(true);
console.log(tc.getStatus());
new Testcase("Login");
new Testcase("Login");
new Testcase("Login");
console.log(Testcase.getCount());
/* 

PASSED
4
*/
