import{test, expect} from "@playwright/test"

test("Advance Dropdown", async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");
    await page.getByTestId("rs-single-input").click();
    await page.getByText('Cypress').click();

    await page.getByTestId('rs-multi-input').click();
    await page.pause();
    await page.getByRole('option',{name:"Playwright"}).click();
    await page.getByRole('option',{name:"Mocha"}).click();
    await page.keyboard.press("Escape");

    await page.locator("#rs-creatable").click();
    await page.getByText("api-testing", {exact:true}).click();
    await page.getByText("performance", {exact:true}).click();
    await page.keyboard.press("Enter");

    //await page.pause();
    await page.locator("#rs-async").click();
    await page.getByTestId("rs-async-input").fill("Pun");
    await page.getByRole('option',{name:"Pune"});

});