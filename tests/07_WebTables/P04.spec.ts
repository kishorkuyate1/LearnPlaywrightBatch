import { test, expect } from "@playwright/test";

test("Web Table", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    const price = await page
        .locator("tbody tr")
        .filter({ hasText: "Strawberry" })
        .locator("td:nth-child(2)")
        .innerText();

    console.log("Price of Strawberry:", price);

});