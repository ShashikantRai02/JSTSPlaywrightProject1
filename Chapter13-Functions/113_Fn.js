//Immediately Invoked Function Expression (IIFE)
//They don't need to be called.
// function name1() {
//   console.log("Hi");
// }
// name1();
/* 
output- Hi
*/
//=============================================
// (function () {
//   console.log("Anonymous Function");
// })();
/* 
output - Anonymous Function
*/
// ====================================================
// (function () {
//   console.log("Staging");
// })();
/* 
output- Staging
*/
// =================================================================
(() => {
  console.log("Setup Complete");
})();
/* 
output- Setup Complete

*/
