const { test, expect } = require("@playwright/test")


test('Assertions', async ({ page }) => {

    await page.goto("https://demo.nopcommerce.com/register");

    // page has a url
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

    // to have title
    await expect(page).toHaveTitle("nopCommerce demo store. Register");

    // to check element is visible or not
    const isLogo = await page.getByAltText("nopCommerce demo store")

    await expect(isLogo).toBeVisible();

    const isInputElement = await page.locator(`//input[@id='small-searchterms']`);

    await expect(isInputElement).toBeEnabled();

    const maleRadioBtn = await page.locator("//input[@id='gender-male']");
    await maleRadioBtn.click();

    await expect(maleRadioBtn).toBeChecked();

    // radiobox checked or not

    const newsLocator = await page.locator("//input[@id='Newsletter']");

    await expect(newsLocator).toBeChecked();

    const isAttirubute = await page.locator("//input[@id='Newsletter']")

    await expect(isAttirubute).toHaveAttribute('id', 'Newsletter')

    const isRegister = await page.locator("//div[@class='page-title']/h1")

    await expect(isRegister).toHaveText("Register");

    const isPersonDetails = await page.locator("//div[@class='title']/strong[text()='Your Personal Details']")

    await expect(isPersonDetails).toContainText("Person")

    const emailInput = await page.locator("#Email");
    await emailInput.fill('test@demo.com')

    await expect(emailInput).toHaveValue("test@demo.com");

    //count

    const isOptions = await page.locator("//div[@class='date-picker-wrapper']/select[@name='DateOfBirthDay']/option");

    await expect(isOptions).toHaveCount(32);


    //negative matchers

    await expect(page).not.toHaveURL("test");


})