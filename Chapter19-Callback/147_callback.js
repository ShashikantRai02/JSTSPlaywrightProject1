function placeorder(item, callback) {
  console.log("place an order");
  console.log("order placed:", item);
  callback();
}
// First way
function completeorderprint() {
  console.log("Normal fn");
}
placeorder("Burger", completeorderprint);
/* 
output-
place an order
order placed: Burger
Normal fn

*/
// second way anonymous function
placeorder("Burger", function () {
  console.log("order is ready!,pick it up");
});
//  3rd way Arrow function
placeorder("Burger", () => {
  console.log("Arrow function, I am also a function without name!");
});
// test("has title", async () => {});
// test("has title", async ({ page }) => {
//   await page.goto("https://playwright.dev/docs/intro");
//   await expect(page).tohavetitle(/Playwright/);
// });
/* 
output-
place an order
order placed: Burger
Normal fn
place an order
order placed: Burger
order is ready!,pick it up
place an order
order placed: Burger
Arrow function, I am also a function without name!
*/
