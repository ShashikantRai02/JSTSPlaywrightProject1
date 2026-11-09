function apicall(name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(name + ":200 OK");
    }, 2000);
  });
}
async function sequentialTest() {
  console.log("Starting of the test ");
  let start = Date.now();
  let r1 = await apicall("Login");
  console.log(r1);
  let r2 = await apicall("Dashboard");
  console.log(r2);
  let r3 = await apicall("Report");
  console.log(r3);
  console.log("Time:~" + (Date.now() - start) + "ms");
}
 sequentialTest();
