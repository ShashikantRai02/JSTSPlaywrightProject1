async function getExample() {
  return "abc";
}
import { test } from "@playwright/test";
test("User say hello", async ({ page }) => {
  let c = await page.goto("");
  let t = await getExample();
});
