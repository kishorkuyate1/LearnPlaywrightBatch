import{test,expect} from "@playwright/test";

test("filter", async({page})=>{

await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter#forgotten-password");
await page.locator("a.list-group-item").filter({hasText:"Forgotten Password"}).click();

const countNumber=page.locator("a.list-group-item");
await expect(countNumber).toHaveCount(13);
const countNumber1=await page.locator("a.list-group-item").count();

console.log(countNumber1);

const privacyLink = page.locator('footer a').filter({ hasText: 'Privacy Policy' });
await expect(privacyLink).toHaveAttribute('href', '#privacy-policy');

})