let apicall = new Promise(function (resolve, reject) {
  resolve({ status: 200, body: "user data" });
});
apicall.then(function (response) {
  console.log(response);
});
let testRun = new Promise(function (resolve, reject) {
  reject("Assertion failed");
});
testRun
  .then(function (data) {
    //resolve
  })
  .catch(function (error) {
    //reject
    console.log(error);
  });
/* 
output- 
{ status: 200, body: 'user data' }
Assertion failed

*/
