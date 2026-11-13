let a = 15;
class Car {
  b;
  constructor() {
    console.log(a);
    this.b = 12;
  }
}
let obj = new Car();
let obj1 = new Car();
/* 
output--
15
15
*/
