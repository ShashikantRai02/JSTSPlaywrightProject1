enum Browser {
  Chrome = "chrome",
  Firefox = "firefox",
  Safari = "safari",
  Edge = "edge",
}
function launchBrowser(browser: Browser): void {
  switch (browser) {
    case Browser.Chrome:
      console.log("Launching chromium(chrome v120)");
      break;
    case Browser.Firefox:
      console.log("Launching Gecko(firefox v115)");
      break;
    case Browser.Edge:
      console.log("Launching chromium (edge v120)");
      break;
    case Browser.Safari:
      console.log("Launching webkit(safari v17)");
      break;
  }
}
launchBrowser(Browser.Chrome);
/* 

Launching chromium(chrome v120)
*/
