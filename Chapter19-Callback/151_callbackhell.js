// Real QA Scenario: E2E Login Flow app.vwo.com
function openbrowser(callback) {
  console.log("opening the browser");
  setTimeout(function () {
    console.log("step1-browser starting..");
    callback();
  }, 5000);
}
function gotologinpage(callback) {
  setTimeout(function () {
    console.log("step 2 -login page loaded");
  }, 5000);
}
function entercredentials(callback) {
  setTimeout(function () {
    console.log("step 3- credentials entered");
    callback();
  }, 5000);
}
function clicklogin(callback) {
  setTimeout(function () {
    console.log("step 4: login button clicked");
    callback();
  }, 4000);
}
// THIS IS CALLBACK HELL 👇
openbrowser(function () {
  gotologinpage(function () {
    entercredentials(function () {
      clicklogin(function () {
        console.log("Test is completed");
      });
    });
  });
});
/* 
output- 
opening the browser
step1-browser starting..
step 2 -login page loaded

*/
