console.log(greeting);
var greeting = "Hello";
console.log(greeting);
/* 
output - undefined
Hello

*/
//  Behind the scenes :
var greeting;
console.log(greeting);
greeting = "Hello!";
console.log(greeting);
// Behind the scenes:
// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"
/* 
output- 
Hello
Hello!
*/
