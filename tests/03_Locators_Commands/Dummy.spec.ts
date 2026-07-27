import { test, expect } from "@playwright/test";

// test() receives two arguments:
// 1. Test name
// 2. Callback function (async ({ page }) => {})
// Playwright executes this callback when the test starts.

test("Login Test", async ({ page }) => {

    // Everything inside this callback executes only
    // after Playwright starts the test.

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin");

    await page.getByPlaceholder("Password").fill("admin123");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page).toHaveURL(/dashboard/);

});