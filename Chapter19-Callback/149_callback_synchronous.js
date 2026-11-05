let testResults = ["Pass", "Fail", "Pass", "Skip"];
testResults.forEach(function (result, index) {
  console.log("test", index, result);
});
/* 

output- 
test 0 Pass
test 1 Fail
test 2 Pass
test 3 Skip

*/
// "All done" prints LAST because forEach is synchronous — 
// it finishes all 4 iterations first, then moves on.