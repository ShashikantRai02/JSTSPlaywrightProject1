class Car {
  #engine; // #private
  constructor(name, engineName) {
    this.name = name;
    this.#engine = engineName;
  }
  getEngine() {
    return this.#engine;
  }
  setEngine(nameEngine) {
    this.#engine = nameEngine;
  }
}
let bmw = new Car("BMW", "V8");
console.log(bmw.getEngine());
bmw.setEngine("V9");
console.log(bmw.getEngine());
/* 
output--
V8
V9

*/
