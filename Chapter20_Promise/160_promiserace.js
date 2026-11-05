let fastserver = new Promise(function (resolve) {
  (setTimeout(function () {
    resolve("Fast 100ms");
  }),
    1000);
});
let sloweserver = new Promise(function (resolve) {
  (setTimeout(function () {
    resolve("Fast 500ms");
  }),
    1000);
});
Promise.race([fastserver, sloweserver]).then(function (winner) {
  console.log("winner:", winner);
});
/* 
output-
winner: Fast 100ms

*/
