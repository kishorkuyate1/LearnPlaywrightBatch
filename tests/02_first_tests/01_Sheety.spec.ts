import{test, expect} from "@playwright/test";

test("VWO using the PW ", async({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByRole('textbox',{name:"email"}).fill("kishor222@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("Udemy@222");
    await page.getByText("login").click();
//    let msg= await page.locator
//    ("//div[@class='ng-tns-c4-5 ng-star-inserted ng-trigger ng-trigger-flyInOut ngx-toastr toast-error']").textContent();
//    console.log(msg);
    expect(await page.getByText('Login Successfully')).toHaveText("Login Successfully");
    let msg= await page.getByText('Login Successfully').innerText();
    console.log(msg);

});
