import{test, expect} from "@playwright/test"

test("Direct multiple Element", async ({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    await page.pause();
    await page.getByTestId("forgotten-password-link").click();
})