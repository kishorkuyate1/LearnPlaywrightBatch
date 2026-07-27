
import{test,expect} from "@playwright/test";

test("Test the error msg from the VWO", async({page})=>{
    await page.goto("https://app.vwo.com/#login");

    let username=page.locator("#login-username");
    username.fill("Manoj@gamil.com");

    await page.locator("#login-password").fill("King@123");
    await  page.locator("#js-login-btn").click();
    let error_message = page.locator('#js-notification-box-msg');
    await expect(error_message).toContainText("Your email, password, IP address or location did not match");

})