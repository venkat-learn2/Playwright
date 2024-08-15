const { test, expect } = require('@playwright/test');


test('Checkbox', async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");


    await page.waitForSelector("//input[@type='checkbox' and @id='hobbies-checkbox-2']")
    

    await expect(await page.locator("//input[@type='checkbox' and @id='hobbies-checkbox-2']").check()).toBeChecked()
    
    await page.waitForTimeout(5000);

})