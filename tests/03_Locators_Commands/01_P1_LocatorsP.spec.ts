import{test,expect} from "@playwright/test";

test("Playwright Locators", async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");
    let a:string= await page.getByLabel("First name").innerText();
    console.log(a);
})