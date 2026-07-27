import{test,expect} from "@playwright/test";

test("Dropdown Advance", async({page})=>{

    await page.goto("https://rahulshettyacademy.com/dropdownsPractise/");
    await page.locator("//input[@value='Departure City']").first().click();
    await page.locator("//a[text()=' Ahmedabad (AMD)']").click();
    await page.locator("(//a[text()=' Mumbai (BOM)'])[2]").click();
    // await page
    // .locator("((//div[@class='dropdownDiv'])[3]/ul/li/a")
    // .filter({ hasText: "Pakyong" })
    // .click();
   

})