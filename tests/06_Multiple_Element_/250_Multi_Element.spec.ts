import {test,expect} from '@playwright/test';

test("test the multiple element ", async ({page})=>
{

await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
const rightPanelTexts:string[] = await page.locator("a.list-group-item").allInnerTexts();
console.log(rightPanelTexts);
page.pause();

 for (const link of rightPanelTexts) {
        console.log(link);
    }
    for (let i = 0; i < rightPanelTexts.length; i++) {
        console.log(rightPanelTexts[i]);
    }

    for (const linkText of rightPanelTexts) {
        if (linkText === "Forgotten Password") {
            await page.getByText(linkText).first().click();
        }
    }

    const rightPanelLinks = await page.locator('a.list-group-item').all();
    for (const link of rightPanelLinks) {
        console.log(await link.getAttribute("href"));
    }


})