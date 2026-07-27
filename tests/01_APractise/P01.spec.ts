import{test,expect} from '@playwright/test';

test("Login into multiple Elements ", async({page})=>{

await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
await page.getByPlaceholder("student@thetestingacademy.com").fill("Kishor@gmail.com");
await page.getByRole('textbox',{name:"password"}).fill("Bank@333");
await page.getByRole('checkbox',{name:"remember"}).click();
await page.getByText("Login to Practice Account").click();
});

test("katholon Web Practise", async({page})=>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.getByRole('link',{name:"Make Appointment"}).click();
    await page.locator('#txt-username').fill('John Doe');
    await page.locator('#txt-password').fill("ThisIsNotAPassword");
    await page.getByRole('button',{name:'Login'}).click();
    await page.locator('#combo_facility').selectOption('Hongkong CURA Healthcare Center');
    await page.locator('#chk_hospotal_readmission').click();
    await page.locator('#radio_program_medicare').click();
    await page.locator('.input-group-addon').click();
    await page.locator("//tr/td[text()='31']").click();
    await page.getByRole('textbox',{name:'comment'}).fill("Book My Apoitment ");
    await page.getByRole('button',{name:'Book Appointment'}).click();

    let status:string | null= await page.locator('//div/h2').textContent();
    console.log(status);

    let statusmsg:string | null= await page.locator('//div/p').first().textContent();
    console.log(statusmsg);

    let details:string[]=await page.locator(".col-xs-offset-2").allInnerTexts();
    console.log(details);


});