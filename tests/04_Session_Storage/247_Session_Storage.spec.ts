import { chromium } from "playwright";



async function saveSession() {
    
    let browser = await chromium.launch({ headless: false });
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://demo.applitools.com/");
    await page.waitForTimeout(2000);

    await page.fill("#username", "opg73@singleusemail.site");
    await page.fill("#password", "wingify@4321");
    await page.waitForTimeout(1500);

    await page.click("#log-in");

    // Wait for login to actually complete before snapshotting storage —
    // otherwise the auth cookie isn't set yet and the saved state is empty.
    await page.waitForURL(/.*app\.html$/, { timeout: 15000 });
    await page.waitForTimeout(3000);

    await context.storageState({ path: "./user-session.json" });
    console.log("Session saved to user-session.json ✅");

    await page.waitForTimeout(2000);
    await browser.close();

}
saveSession();
