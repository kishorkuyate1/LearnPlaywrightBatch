import{test, expect} from "@playwright/test";

test("Dropdown part 1", async({page})=>{
    await page.goto("https://proleed.academy/exercises/selenium/automation-practice-form-with-radio-button-check-boxes-and-drop-down.php");
    await page.locator('#prefix').hover();
    await page.locator('#prefix').selectOption('Mrs.');
    await page.getByPlaceholder('First Name').fill("K");
    await page.getByPlaceholder('Last Name').fill("Patil");
    await page.locator("#pension").check();
    await page.locator('#fathername').fill('Mohon');
    await page.locator('#mothername').fill('Patil');
    await page.locator("#studentid").click();
    await page.locator('#identity_number').fill("9876543");
    await page.locator('#dob_month').selectOption({index:6});
    await page.locator('#dob_date').selectOption({label:'25'});
    await page.locator('#dob_year').selectOption({label:'2021'});
    
})