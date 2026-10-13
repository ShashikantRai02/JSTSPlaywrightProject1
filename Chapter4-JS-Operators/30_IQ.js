let environment = "staging";
let baseUrl =
  environment === "prod"
    ? "https://api-example.com/"
    : "https://staging-api-example.com/";
console.log(baseUrl);
/* 

output
https://staging-api-example.com/

*/
