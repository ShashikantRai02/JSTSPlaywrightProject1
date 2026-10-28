// Searching & Checking
let url = "https://demowebshop.tricentis.com/";
// includes()
console.log(url.includes("staging"));
console.log(url.includes("production"));
// startsWith / endsWith
console.log(url.startsWith("https"));
console.log(url.startsWith("http://"));
console.log(url.endsWith("true"));
// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere"));
// ASCII -> A -> 65
/* 
output-
false
false
true
false
false
-1
-1
-1

*/
