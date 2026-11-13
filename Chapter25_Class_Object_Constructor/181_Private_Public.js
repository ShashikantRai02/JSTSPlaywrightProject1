class Browser {
  constructor(name) {
    this.name = name;
    this.isOpen = true;
    console.log(name + "Launched");
  }
  startBrowser() {
    console.log("Starting the browser");
  }
  closeBrowser() {
    console.log("Close the browser");
  }
}
let chrome = new Browser("Chrome");
let firefox = new Browser("Firefox");
console.log(chrome.isOpen);
chrome.closeBrowser();
chrome.startBrowser();
firefox.closeBrowser();
firefox.startBrowser();
/* 
output--
ChromeLaunched
FirefoxLaunched
true
Close the browser
Starting the browser
Close the browser
Starting the browser
*/
