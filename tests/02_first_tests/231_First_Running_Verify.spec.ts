import{test , expect} from '@playwright/test';

test('verify our first test', async({page}) =>{
    await page.goto('https://app.vwo.com/');
    await expect(page).toHaveTitle('Login - Wingify');
    const logo= page.locator("#vow-login-logo");
    await expect(logo).toBeVisible();

});