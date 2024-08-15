const { test, expect } = require('@playwright/test');


test('Bootstrap', async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");
    // validation assert 1
    await page.locator('.multiselect').click();
    const options = await page.locator('ul>li> label input');
    await expect(options).toHaveCount(11);

    // validation assert 2
    const options1 = await page.$$('ul>li> label input');
    await expect(options1.length).toBe(11);
    await page.waitForTimeout(5000);

    // select the particular dropdown
    const options2 = await page.$$('ui>li>label input');
    for (option of options2) {
        const value = await options.textContent();
        console.log(`option value is:${value}`)
    }
})