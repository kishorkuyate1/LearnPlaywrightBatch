import{test,expect} from '@playwright/test';

test('verify the referal', async ({page})=>{

    await page.goto('https://app.vwo.com/');
    referral: "https://google.com/search?q=testing+academy"
 console.log("Page loaded with Google as referer");
    console.log("URL:", page.url());
});