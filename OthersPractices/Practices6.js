(function () {
  var secret = "token";
  console.log("ran");
})();
console.log(typeof secret);
function counter() {
  let count = 0;
  return () => ++count;
}
const next = counter();
next();
console.log(next());

function retry(times = 3) {
  return "retrying " + times + " times";
}
console.log(retry());
console.log(retry(1));

function logStep(step) {
  console.log("step: " + step);
}
const result = logStep("login");
console.log(result);
