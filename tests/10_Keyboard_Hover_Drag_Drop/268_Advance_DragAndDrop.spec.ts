import{test, expect, FrameLocator,Locator} from "@playwright/test";

test('Advance Drag and Drop', async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/dnd");

    await page.locator('#card-review-pr-21').dragTo(page.locator('[data-status="in-progress"]'));
    await page.locator('#card-review-pr-21').dragTo(page.locator('[data-status="review"]'));

});
