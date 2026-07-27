import { test, expect } from "@playwright/test";

// Load saved session — already logged in
test.use({
    storageState: "./user-session.json"
});

test("Go directly to Dashboard — no login", async ({ page }) => {

    await page.goto("https://demo.applitools.com/app.html");

    await expect(page).toHaveURL("https://demo.applitools.com/app.html");

    console.log("Dashboard loaded — no login needed ✅");

    await page.waitForTimeout(3000);

});

test("Open Dashboard again using saved session", async ({ page }) => {

    await page.goto("https://demo.applitools.com/app.html");

    await expect(page).toHaveURL(/.*app\.html$/);

    console.log("User is still logged in ✅");

    await page.waitForTimeout(3000);

});

