import { test, expect } from '@playwright/test';

// Import Playwright's test runner and assertion library.

test("goto with different waitUntil options", async ({ page }) => {
    // Create a Playwright test.
    // 'page' is a browser tab used to perform actions.

    // Navigate to the URL.
    // waitUntil: "commit"
    // Wait only until the server starts responding.
    // Fastest option.
    await page.goto("https://app.com/page1", { waitUntil: "commit" });
    console.log("commit: server responded");

    // Navigate to another URL.
    // waitUntil: "domcontentloaded"
    // Wait until the HTML is loaded and the DOM is created.
    // Images, CSS, and fonts may still be loading.
    await page.goto("https://app.com/page2", { waitUntil: "domcontentloaded" });
    console.log("domcontentloaded: HTML parsed");

    // Navigate to another URL.
    // waitUntil: "load" (Default)
    // Wait until HTML, CSS, JavaScript, images,
    // and other resources are fully loaded.
    await page.goto("https://app.com/page3", { waitUntil: "load" });
    console.log("load: all resources loaded");

    // Navigate to another URL.
    // waitUntil: "networkidle"
    // Wait until there are no network requests
    // for at least 500 milliseconds.
    // Useful for SPA applications (React, Angular, Vue).
    await page.goto("https://app.com/page4", { waitUntil: "networkidle" });
    console.log("networkidle: no requests for 500ms");
});