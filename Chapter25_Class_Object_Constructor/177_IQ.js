class Car {
  // constructor
  // Default vs Parameter
  constructor(assigned_name) {
    this.name = assigned_name;
  }
}
let hyundai_i10 = new Car("i10");
console.log(hyundai_i10.name);
let safari = new Car("SAFARI KIA");
console.log(safari.name);
const i11 = new Car("I11");
console.log(i11.name);
const nexon = new Car("Tata Nexon");
console.log(nexon.name);
/* 
i10
SAFARI KIA
I11
Tata Nexon

*/
