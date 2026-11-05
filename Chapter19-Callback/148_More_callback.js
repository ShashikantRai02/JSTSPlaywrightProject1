function test(item, callMeWhenDone) {
  console.log("Hi start the test case", item);
  callMeWhenDone();
}
test("verify the login page is working", async (page) => {});
/* 
output- 
Hi start the test case verify the login page is working


*/
