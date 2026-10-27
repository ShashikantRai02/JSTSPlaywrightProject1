// function add(a, b, c) {
//   return a + b + c;
// }
// let num = [1, 2, 3, 4];
// console.log(add(...num));
/* 
output - 6 
*/
// ==========================================================
function hasError(...codes) {
  return codes.some((c) => c >= 400);
}
let responsecodes = [200, 201, 404];
let responsecodes1 = [200, 201, 404, 500];
console.log(hasError(...responsecodes));
console.log(hasError(...responsecodes1));
/* 
output - true true
*/
