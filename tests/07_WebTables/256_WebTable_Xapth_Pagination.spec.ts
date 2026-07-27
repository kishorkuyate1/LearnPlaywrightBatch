import{test,expect} from "@playwright/test";
 test("multiple Pages and check the name" , async ({page})=>{

await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

let name: string="Yuki Sato";


let row;
while(true){
        row = page.locator('#employees-tbody tr').filter({ hasText: name });
        if(await row.count()){
            break;
        }

        const next=page.getByTestId("next-page");
        if(await next.isDisabled()) throw new Error("Name not present");{
            await next.click();
        }
        const email= await row.locator("//td[@data-col='email']").innerText();
        const country= await row.locator("//td[@data-col='role']").innerText();

         console.log(email, country);
        await page.waitForTimeout(5000);
}

 })