import { test, expect } from '@playwright/test';

test('has title', async({page})=> {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

test.skip('Skip Test ', async({page})=> {

});

test.only('Focus Test ', async({page})=> {

});

test.fail('expected to fail', async ({ page }) => {
    // Test is expected to fail
});

// Slow test (3x timeout)
test.slow('slow test', async ({ page }) => {
    // Has extended timeout
});

// Conditional skip
test('conditional', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Not supported in Firefox');
});