class Testcase {
  execute() {
    console.log("Running generic test");
  }
}
class Unittest extends Testcase {
  execute() {
    console.log("Running unit test - checking one function");
  }
}
class APITest extends Testcase {
  execute() {
    console.log("Running API test - sending HTTP request");
  }
}
class E2Etest extends Testcase {
  execute() {
    console.log("Running E2E test -opening browser");
  }
}
let tests = [new Unittest(), new APITest(), new E2Etest()];
tests.forEach(function (test) {
  test.execute();
});
/* 
output---
Running unit test - checking one function
Running API test - sending HTTP request
Running E2E test -opening browser
*/
