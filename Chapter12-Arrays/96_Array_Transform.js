// Map vs Filter
//  every vs some
// every-All must pass
console.log([80, 90, 95].every((i) => i >= 70));
console.log([80, 60, 85].every((i) => i >= 70));
// some-At least one must pass
console.log([80, 60, 85].some((s) => s < 70));
console.log([80, 90, 85].some((s) => s < 70));
/* 
output-
true
false
true
false

*/
