import{test,expect} from "@playwright/test";

 test("open the Apptool log ", async({page})=>
{
 await page.goto("https://demo.applitools.com/");
 await page.getByPlaceholder('Enter your username').fill("KKMAK");
 await page.getByPlaceholder('Enter your password').fill("Bank@123")
 await page.getByRole('link',{name:"Sign in"}).click();
 await page.waitForTimeout(10000);
 let msg=page.locator("#time").textContent();
 console.log(msg);
 expect(msg).toContain("Your nearest branch closes in: 30m 5s");
 
})