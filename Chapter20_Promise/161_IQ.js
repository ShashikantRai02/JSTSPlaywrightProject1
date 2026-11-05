// let p = new Promise(function (resolve) {
//   resolve(38);
// });
// p.then(function (value) {
//   console.log("Answer:", value);
// });
// let p = new Promise(function (resolve, reject) {
//   reject("something broke");
// });
// p.catch(function (err) {
//   console.log("caught:", err);
// });
let p = Promise.resolve(6);
p.then(function (value) {
  return value * 11;
}).then(function (val) {
  console.log("Result:", val);
});
Promise.resolve(1)
  .then(function (val) {
    console.log(val);
    return val + 1;
  })
  .then(function (val) {
    console.log(val);
    return val + 1;
  })
  .then(function (val) {
    console.log(val);
  });
Promise.resolve("start")
  .then(function (val) {
    console.log(val);
    throw new Error("broke at step2");
  })
  .then(function () {
    console.log("This will not run ");
  })
  .catch(function (err) {
    console.log("Caught:", err.message);
  });
Promise.reject("Test failed")
  .then(function (data) {
    console.log("Data:", data);
  })
  .catch(function (err) {
    console.log("Error:", err);
  })
  .finally(function () {
    console.log("Cleanup done");
  });
/* 
output- 
1
start
Result: 66
2
Error: Test failed
3
Caught: broke at step2
Cleanup done
*/
