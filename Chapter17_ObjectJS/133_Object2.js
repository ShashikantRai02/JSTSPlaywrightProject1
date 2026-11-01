let a = { status: "pass" };
let b = a; // copy the reference
b.status = "fail";
console.log(a.status);
/* 
output- fail

*/
