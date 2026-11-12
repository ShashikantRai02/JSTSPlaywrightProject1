export let Base_Url = "https://app.vwo.com/#/login";
export function formatTestName(name) {
  return "TC_" + name.toUpperCase();
}
export function formatTestName2(name) {
  return "TC_" + name.toUpperCase();
}
export class LoginPage {
  constructor(page) {
    this.page = page;
  }
  async login(u, p) {
    /* ----- */
  }
  async openBrowser(u, p) {
    /* ----- */
  }
  async closerBrowser(u, p) {
    /* ----- */
  }
  async clickElement(u, p) {
    /* --------- */
  }
}
