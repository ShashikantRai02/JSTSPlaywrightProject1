//  Accessing & Modifying
let statuses = ["pass", "fail", "skip"];
console.log(statuses[0]);
console.log(statuses[1]);
console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-4));
// Modify
statuses[1] = "blocked";
console.log(statuses);
console.log(statuses.length);
/* 
output-
pass
fail
skip
fail
undefined
[ 'pass', 'blocked', 'skip' ]
3

*/
