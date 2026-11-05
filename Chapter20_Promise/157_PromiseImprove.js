function openbrowser() {
  return new Promise(function (resolve) {
    resolve("Browser has been opened");
  });
}
function gotologin() {
  return new Promise(function (resolve) {
    resolve("login page loaded");
  });
}
function entercredentials() {
  return new Promise(function (resolve) {
    resolve("credentials entered");
  });
}
function clicklogin() {
  return new Promise(function (resolve) {
    resolve("Logged in successfully");
  });
}
openbrowser()
  .then(function (message) {
    console.log("step1", message);
    return gotologin();
  })
  .then(function (message) {
    console.log("step2:", message);
    return entercredentials();
  })
  .then(function (message) {
    console.log("step 3:", message);
    return clicklogin();
  })
  .then(function (message) {
    console.log("step 4:", message);
  })
  .catch(function (error) {
    console.log("Error:", error);
  })
  .finally(function () {
    console.log("Done execution");
  });
/* 
output- 
step1 Browser has been opened
step2: login page loaded
step 3: credentials entered
step 4: Logged in successfully
Done execution

*/
