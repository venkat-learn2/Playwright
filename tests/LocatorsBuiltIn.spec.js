const { test, expect } = require('@playwright/test');


test('LocatorsBuiltIn', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


    // await page.click("//button[contains(text(),'')]");

    const logo = await page.getByAltText("company-branding")
    await expect(logo).toBeVisible();

    const inputfield1 = await page.getByPlaceholder("Username");
    await expect(inputfield1).toBeVisible();


    await page.fill("//input[@name='username']", 'Admin')
    await page.fill("//input[@name='password']", 'admin123')

    await page.getByRole('button', { type: 'submit' }).click();

    await expect(await page.getByText("First Name Last Name")).toBeVisible();

})

