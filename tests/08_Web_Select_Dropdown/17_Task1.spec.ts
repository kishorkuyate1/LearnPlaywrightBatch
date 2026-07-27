import { test, expect } from '@playwright/test';

test('Verify country of user', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    let name = "Yoshi Tannamuri";
    const country = await page.locator("#companies-table tr")
        .filter({ hasText: name })
        .locator("td[data-col='country']")
        .innerText();

    console.log(`Country of ${name} is ${country}`);
});