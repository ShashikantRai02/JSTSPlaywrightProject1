async function riskyTest() {
  try {
    let data = await Promise.reject("Element not found");
    console.log(data);
  } catch (Error) {
    console.log("Test failed:", Error);
  }
}
riskyTest();
/*
output-  
Test failed: Element not found

*/
async function apiTest() {
  try {
    let response = await Promise.resolve({ status: 201, body: "Created" });
    console.log("Status:", response.status);
    console.log("Body:", response.body);
  } catch (Err) {
    console.log("ERROR:", Err);
  } finally {
    console.log("Test complete");
  }
}
apiTest();
/* 
output-- 
Status: 201
Body: Created
Test complete

*/