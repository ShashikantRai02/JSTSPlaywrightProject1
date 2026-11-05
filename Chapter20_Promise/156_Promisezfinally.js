let apicall = new Promise(function (resolve, reject) {
  resolve({ status: 200 });
  reject("error");
});
apicall
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // Always executed
    console.log("I will be executed any how");
  });
/* 
output- 
{ status: 200 }
I will be executed any how

*/
