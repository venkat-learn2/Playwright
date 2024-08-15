const { test, expect } = require('@playwright/test');

test('mouse double click', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const copyElement = page.locator(`//button[text()='Copy Text']`);

    // double click
    await copyElement.dblclick();
    // await copyElement.click({ clickCount: 2 })

    const verifyText = await page.locator(`//input[@id='field2']`);
    await expect(verifyText).toHaveValue('Hello World!');

    await page.waitForTimeout(5000);

})