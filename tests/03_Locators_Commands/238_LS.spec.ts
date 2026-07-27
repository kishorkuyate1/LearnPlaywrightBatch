import{test,expect} from "@playwright/test";

test("To verify the TC", async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    
})