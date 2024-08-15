const { test, expect } = require('@playwright/test')

test('inputBox', async ({ page }) => {

    await page.goto("https://demoqa.com/automation-practice-form");

    await page.waitForSelector("//input[@id='firstName']")
    const firstName = await page.locator("//input[@id='firstName']");
    await expect(firstName).toBeVisible();
    await expect(firstName).toBeEmpty();
    await expect(firstName).toBeEditable();
    await expect(firstName).toBeEnabled();


    await page.fill("//input[@id='firstName']", 'venkatesh');

    await page.waitForTimeout(5000) //

})