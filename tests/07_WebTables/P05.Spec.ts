import{test,expect} from "@playwright/test";
import { count, error } from "node:console";

test("Table advance", async({page})=>{

await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

let fruiteName="Dragon fruit";

let row;
while(true){

    row=page.locator('tbody tr').filter({hasText:fruiteName});
    if(await row.count()){
        break;
    }
    const next=page.getByLabel('Next');
    if(await next.isDisabled()) throw new Error("Name Not Present");
    await next.click();
    }

    const price=await row.locator("td:nth-child(2)").innerText();
    const discountPrice=await row.locator("td:nth-child(3)").innerText();
    console.log(price , discountPrice);

});