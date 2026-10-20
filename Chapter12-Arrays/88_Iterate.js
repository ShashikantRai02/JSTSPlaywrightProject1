let tests = ["login", "checkout", "search"];
for (let i = 0; i < tests.length; i++) {
  console.log(i, tests[i]);
}
console.log("--------------------------------");
//  for ... of (cleanest for value)
for (let test of tests) {
  console.log(test);
}
console.log("===============================");
console.log("==========forEach=========================");
//  forEach (no return value)
tests.forEach((test, index) => {
  console.log(`${index}:${test}`);
});
console.log("------------------------------------------");
//  entries() - index + value
for (let [i, test] of tests.entries()) {
  console.log(i, test);
}
let students = ["methis", "senthil", "ajay", "rahul"];
for (let student of students) {
  console.log(student, "->", students[student]);
}
/* 
output-

0 login
1 checkout
2 search
--------------------------------
login
checkout
search
===============================
==========forEach=========================
0:login
1:checkout
2:search
------------------------------------------
0 login
1 checkout
2 search
methis -> undefined
senthil -> undefined
ajay -> undefined
rahul -> undefined

*/
