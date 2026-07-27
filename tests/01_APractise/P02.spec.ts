import{test,expect} from '@playwright/test';

test("katholon Web Practise", async({page})=>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.getByRole('link',{name:"Make Appointment"}).click();
    await page.locator("//input[@type='text']").nth(3).fill("John Doe");
});