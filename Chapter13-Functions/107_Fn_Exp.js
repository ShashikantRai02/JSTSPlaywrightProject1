// Function as Expression
function greet(name) {
  return `Hello, ${name}`;
}
// Anonymous Fn - Fn without name.
const greet1 = function (name) {
  return `Hello, ${name}`;
};
console.log(greet1("Shashikant Rai"));
console.log(greet("Krisha Rai"));
/* 
output - 
Hello, Shashikant Rai
Hello, Krisha Rai

*/
