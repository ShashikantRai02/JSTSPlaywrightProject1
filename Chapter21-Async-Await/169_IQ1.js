async function sayHello() {
  return "Hello , QA!";
}
sayHello().then(function (message) {
  console.log(message);
});
async function getStatus() {
  let status = await Promise.resolve(200);
  console.log("Status code:", status);
}
getStatus();
/* 
output- 
Hello , QA!
Status code: 200

*/
async function testFlow() {
  let step1 = await Promise.resolve("Opened browser");
  console.log(step1);
  let step2 = await Promise.resolve("Clicked login");
  console.log(step2);
  let step3 = await Promise.resolve("Verified Browser");
  console.log(step3);
}
testFlow();
/* 
output--
Opened browser
Clicked login
Verified Browser
*/
