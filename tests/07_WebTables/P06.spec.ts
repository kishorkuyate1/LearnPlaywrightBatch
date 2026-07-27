import { test, expect } from "@playwright/test";

test("Web Table", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    for (let i = 1; i <= 2; i++) {

        await page.locator("th:nth-child(2)").click();

        const firstRow = page.locator("tbody tr").first();

        const fruit = await firstRow.locator("td").nth(0).innerText();
        const price = await firstRow.locator("td").nth(1).innerText();
        const discount = await firstRow.locator("td").nth(2).innerText();

        console.log(`Fruit : ${fruit}`);
        console.log(`Price : ${price}`);
        console.log(`Discount : ${discount}`);
        console.log("----------------------");
    }

});