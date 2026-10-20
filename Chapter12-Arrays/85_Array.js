let browsers = ["chrome", "firefox", "safari", "opera", "edge"];
console.log(browsers.length);
browsers.pop();
console.log(browsers);
let removed = browsers.shift();
console.log(removed);
console.log(browsers);
for (let i = 0; i < browsers.length; i++) {
  console.log(browsers[i]);
  if (browsers[i] === "opera") {
    console.log("opera doesn't support automation now");
  }
}
/* 
output -
5
[ 'chrome', 'firefox', 'safari', 'opera' ]
chrome
[ 'firefox', 'safari', 'opera' ]
firefox
safari
opera
opera doesn't support automation now

*/
