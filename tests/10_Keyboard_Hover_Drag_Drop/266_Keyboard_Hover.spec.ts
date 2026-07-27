import { test,expect,Locator,FrameLocator } from "@playwright/test";

test('Hover over', async({page})=>{
    await page.goto("https://www.spicejet.com/");
    await page.getByText('Add-ons',{exact: true}).hover();
    await page.getByText('FlyEarly').click();
})
