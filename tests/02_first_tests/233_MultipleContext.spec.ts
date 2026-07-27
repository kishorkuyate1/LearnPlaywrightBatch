import {chromium} from 'playwright';

async function multipleContext(){

    let browser = await chromium.launch({headless: false});
    let adminContext= await browser.newContext();
    let adminPage= await adminContext.newPage();
    await adminPage.goto('https://app.vwo.com');

    console.log('Admin: on Login Page ');

    
    // Viewer
    let viewerContext = await browser.newContext();
    let viewerPage = await viewerContext.newPage();
    await viewerPage.goto("https://app.vwo.com/login");
    console.log("Viewer: on login page");

    await adminContext.close();
    await viewerContext.close();
    await browser.close();

}

multipleContext();