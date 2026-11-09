import {test,expect} from "@playwright/test"
test("Uses await in a Playwright test", async({page})=>{
await page.goto("https://playwright.dev/docs/intro")
// page.locator("")
})