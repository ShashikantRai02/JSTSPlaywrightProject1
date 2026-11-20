interface Testconfig {
  browser: string;
  headless: boolean;
  baseURL: string;
  timeout?: number;
  retries?: number;
}
let localconfig: Testconfig = {
  browser: "Firefox",
  headless: true,
  baseURL: "http://localhost:8080/",
};
let ciConfig: Testconfig = {
  browser: "Chrome",
  headless: false,
  baseURL: "http://localhost:8060/",
  timeout: 10000,
  retries: 3,
};
console.log("CI:", ciConfig.browser, "|timeout:", ciConfig.timeout);
console.log("LOCAL:", localconfig.browser, "|timeout:", localconfig.timeout);
/* 

CI: Chrome |timeout: 10000
LOCAL: Firefox |timeout: undefined
*/
