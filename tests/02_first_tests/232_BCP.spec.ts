// Import Playwright classes.
// chromium → Used to launch the Chromium browser.
// Browser → Represents the browser instance.
// BrowserContext → Represents an isolated browser session.
// Page → Represents a browser tab.
import { chromium, Browser, BrowserContext, Page } from "playwright";

// Create an asynchronous function.
// All Playwright operations are asynchronous, so we use async.
async function run() {

    // LEVEL 1: Launch the browser.
    // This is the heaviest operation, so launch the browser only once.
    // headless: false → Opens the browser in visible mode.
    let browser: Browser = await chromium.launch({ headless: false });
    console.log("Browser Launched", browser);

    // LEVEL 2: Create the first Browser Context.
    // A Browser Context is an isolated browser session with
    // separate cookies, cache, and local storage.
    let context1: BrowserContext = await browser.newContext();
    console.log("Context created", context1);

    // Create another independent Browser Context.
    // It behaves like another user using the browser.
    let context2: BrowserContext = await browser.newContext();
    console.log("Context created", context2);

    // LEVEL 3: Create a new Page (Browser Tab)
    // inside the first Browser Context.
    let page: Page = await context1.newPage();
    console.log("Page opened");

    // Navigate the page to the specified URL.
    await page.goto("https://app.vwo.com");

    // Get and print the title of the current web page.
    console.log("Title:", await page.title());

    // ---------------- Cleanup ----------------

    // Close the browser tab.
    await page.close();

    // Close the first browser context.
    // This removes all pages, cookies, and session data.
    await context1.close();

    // Close the second browser context.
    await context2.close();

    // Close the browser completely.
    // Always close the browser at the end to free system resources.
    await browser.close();

}

// Call the run() function to start execution.
run();