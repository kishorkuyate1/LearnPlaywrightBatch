import { test, expect } from "@playwright/test";

test("BCP for Shopping", async ({ browser }) => {

    // User 1 Browser Context
    const user1Context = await browser.newContext();
    const user1Page = await user1Context.newPage();

    // User 2 Browser Context
    const user2Context = await browser.newContext();
    const user2Page = await user2Context.newPage();

    // User 1 Login
    await user1Page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await user1Page.locator("#userEmail").fill("kishor222@gmail.com");
    await user1Page.locator("#userPassword").fill("Udemy@222");
    await user1Page.locator("#login").click();

    // User 2 Login
    await user2Page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await user2Page.locator("#userEmail").fill("kishor333@gmail.com");
    await user2Page.locator("#userPassword").fill("Udemy@333");
    await user2Page.locator("#login").click();

    // Close contexts
    await user1Context.close();
    await user2Context.close();

});