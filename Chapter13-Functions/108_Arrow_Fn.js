function greet(name) {
  return `Hello, ${name}`;
}
const c1 = greet("Ravi");
console.log(c1);
const greet1 = function (name) {
  return `Hello, ${name}`;
};
const c2 = greet1("Shyam");
console.log(c2);
//  Arrow function
const greet2 = (name2) => `Hello , ${name2}`;
console.log(greet2("Arrowfunction"));
// If you want to make a normal function to arrow function.
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>
/* 
output- 
Hello, Ravi
Hello, Shyam
Hello , Arrowfunction
*/
