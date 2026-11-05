console.log("Test 1:started!");
setTimeout(function () {
  console.log("Test2: started");
}, 30000);
console.log("Test 3:started!");
/* 
output- 
Test 1:started!
Test 3:started!
Test2: started [print after 30 sec] 

*/
