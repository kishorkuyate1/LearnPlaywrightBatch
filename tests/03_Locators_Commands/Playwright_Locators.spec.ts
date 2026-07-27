import{test, expect} from "@playwright/test";

test("VWO using the PW ", async({page})=>{

    // ===============================
// Playwright getBy Locators Syntax
// ===============================

// 1. getByRole()
page.getByRole('button');
page.getByRole('button', { name: 'Login' });
page.getByRole('link', { name: 'Home' });
page.getByRole('textbox', { name: 'Username' });
page.getByRole('checkbox', { name: 'Remember Me' });
page.getByRole('radio', { name: 'Male' });
page.getByRole('combobox');
page.getByRole('option', { name: 'India' });
page.getByRole('heading', { name: 'Dashboard' });
page.getByRole('img', { name: 'Logo' });

// 2. getByText()
page.getByText('Login');
page.getByText('Welcome');
page.getByText('Submit', { exact: true });

// 3. getByLabel()
page.getByLabel('Username');
page.getByLabel('Password');

// 4. getByPlaceholder()
page.getByPlaceholder('Enter username');
page.getByPlaceholder('Search');

// 5. getByAltText()
page.getByAltText('Company Logo');
page.getByAltText('Profile Image');

// 6. getByTitle()
page.getByTitle('Close');
page.getByTitle('Settings');

// 7. getByTestId()
page.getByTestId('login-button');
page.getByTestId('username-input');



})