function apicall(name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(name + ": 200 OK");
    }, 2000);
  });
}
async function parallelTest() {
  console.log("Starting of the test");
  let start = Date.now();
  let [r1, r2, r3] = await Promise.all([
    apicall("Auth Service"),
    apicall("User Service"),
    apicall("Payment Service"),
  ]);
  console.log(r1);
  console.log(r2);
  console.log(r3);
  console.log("Time:~" + (Date.now() - start) + "ms");
}
parallelTest();
/* 
output --

Starting of the test
Auth Service: 200 OK
User Service: 200 OK
Payment Service: 200 OK
Time:~2008ms

*/
