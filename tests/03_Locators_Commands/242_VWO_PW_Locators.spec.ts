import{test, expect} from "@playwright/test";

test("VWO using the PW ", async({page})=>{

    await page.goto("https://vwo.com/free-trial/");
    await page.getByRole('textbox',{name:"email"}).fill("Manoj@gamil.com");
    await page.getByRole('checkbox').check();
    let errorMsg=page.locator("xpath=//div[contains(@class,'invalid-reason')]").first().textContent();
     expect(errorMsg).toContain("The email address you entered is incorrect.");
    await page.waitForTimeout(10000);



})