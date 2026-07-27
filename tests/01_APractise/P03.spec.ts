import{test, expect} from '@playwright/test';

test("Table functions ", async({page})=>{

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    let row1= await page.locator("tbody tr");
    let rowCount=await row1.count();
    console.log(rowCount);

    for(let i=0;i<=rowCount;i++){
        console.log(await row1.nth(i).innerText());
    }
})

