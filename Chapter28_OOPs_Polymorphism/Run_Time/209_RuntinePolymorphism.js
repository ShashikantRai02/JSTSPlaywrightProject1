class BaseTest {
  setup() {
    console.log("Base: open browser");
  }
}
class APIPage extends BaseTest {
  setup() {
    console.log("APITEST: open browser");
  }
}
let btest = new BaseTest();
let test = new APIPage();
test.setup();
btest.setup();
/* 
output--
APITEST: open browser
Base: open browser
*/
