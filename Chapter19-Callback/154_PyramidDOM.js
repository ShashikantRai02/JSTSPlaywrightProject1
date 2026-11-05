function step1(callback) {
  console.log("open browser");
  callback();
}
function step2(callback) {
  console.log("Navigate to page");
  callback();
}
function step3(callback) {
  console.log("click button");
  callback();
}
function step4(callback) {
  console.log("click button");
  callback();
}
step1(function () {
  step2(function () {
    step3(function () {
      step4(function () {
        console.log("Done!");
      });
    });
  });
});
/* 
output- 
open browser
Navigate to page
click button
click button
Done!

*/
