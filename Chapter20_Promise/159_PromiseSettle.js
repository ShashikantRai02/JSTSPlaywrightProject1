Promise.allSettled([
  Promise.resolve("Test a passed"),
  Promise.reject("Test B failed"),
  Promise.resolve("Test C passed"),
]).then(function (results) {
  results.forEach(function (r, i) {
    console.log("Test" + (i + 1) + ":", r.status, "_", r.value || r.reason);
  });
});
/* 

Test1: fulfilled _ Test a passed
Test2: rejected _ Test B failed
Test3: fulfilled _ Test C passed
*/
