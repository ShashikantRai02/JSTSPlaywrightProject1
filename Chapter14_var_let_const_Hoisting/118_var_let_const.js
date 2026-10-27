// var is actual traitor - cheator
// let is sincere person
// const is just const which will not change.

// VARIABLE - Fn Scoped
var a = 11;
console.log(a);
function printHello() {
  console.log("Hello Krisha Rai");
  var a = 22;
  console.log(a);
  if (true) {
    var a = 36;
    console.log(a);
  }
  console.log(a);
}
printHello();
/* 
output- 
11
Hello Krisha Rai
22
36
36

*/
