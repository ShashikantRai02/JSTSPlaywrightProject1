const browsers = ["chrome", "firefox", "Webkit"];
console.log(browsers[0]);
console.log(browsers.at(-1));
console.log(browsers.length);
/* 
output-

chrome
Webkit
3

*/
/* 

.at(-1) means:
Give me the last element of the array.
Why -1?
.at() supports negative indexes:
It's a convenient way to access elements from the end.
*/
