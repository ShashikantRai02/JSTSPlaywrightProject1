// Type 1 - No param / argument, No Return -> final retunr undefined.
// Fn Define
function greet() {
  console.log("Hello.TheTesting Academy");
}
// function calling
greet();
greet();
greet();
greet();
greet();
greet();
greet();

function openBrowser() {
  console.log("Open Browser");
  // open the browser
}
openBrowser();
let msg = greet();
console.log(msg);
/* 
output - 
Hello.TheTesting Academy
Hello.TheTesting Academy
Hello.TheTesting Academy
Hello.TheTesting Academy
Hello.TheTesting Academy
Hello.TheTesting Academy
Hello.TheTesting Academy
Open Browser
Hello.TheTesting Academy
undefined
*/
