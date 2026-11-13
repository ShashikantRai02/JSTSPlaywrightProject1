class APIClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  shashikant(path) {
    return this.baseUrl + path;
  }
}
let staging = new APIClient("https://staging.api.com");
let prod = new APIClient("https://prod.api.com");
console.log(staging.shashikant("/users"));
console.log(prod.shashikant("/prod/users"));
/* 
output---
https://staging.api.com/users
https://prod.api.com/prod/users
*/
