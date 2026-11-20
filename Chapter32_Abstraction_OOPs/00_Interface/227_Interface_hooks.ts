interface TestHook {
  (testname: string): void;
}
let beforeEachHook: TestHook = function (testname: string): void {
  console.log("[Before] setting up:" + testname);
};
let afterEachHook: TestHook = function (testname: string): void {
  console.log("[After] Tearing down:" + testname);
};
console.log(beforeEachHook("Login Test"));
console.log(afterEachHook("Logout Test"));
/* 
[Before] setting up:Login Test
undefined
[After] Tearing down:Logout Test
undefined

*/
