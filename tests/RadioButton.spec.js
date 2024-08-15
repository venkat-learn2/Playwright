const { test, expect } = require('@playwright/test');


test('RadioButton', async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");

    await page.locator("//input[@id='gender-radio-1']").check();
    await expect(page.locator("//input[@id='gender-radio-1']")).toBeChecked();

    await expect(page.locator("//input[@id='gender-radio-1']")).toBeTruthy();

    await expect(page.locator("//input[@id='gender-radio-1']")).toBeFalsy();

    await expect(page.locator("//input[@id='gender-radio-1']")).toBeChecked().toBeFalsy();


    await page.waitForTimeout(5000);

})