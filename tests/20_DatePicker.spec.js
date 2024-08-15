const { test, expect } = require('@playwright/test');

test('date picker', async ({ page }) => {
    await page.goto(`https://testautomationpractice.blogspot.com/`);

    // await page.fill(`//input[@id='datepicker']`, '08/20/2024');

    // date picker

    const year = '2024';
    const month = "December";
    const day = "20";

    await page.click(`//input[@id='datepicker']`);

    while (true) {
        const currentYear = await page.locator(`//span[@class='ui-datepicker-year']`).textContent();
        const currenMonth = await page.locator(`//span[@class='ui-datepicker-month']`).textContent();

        if (currentYear == year && currenMonth == month) {
            break;
        }

        await page.click(`//a[@title='Next']`)

    }

    const dates = await page.$$(`//a[@class='ui-state-default']`);

    for (const date of dates) {
        if (await date.textContent() == day) {
            await date.click();
            break;
        }
    }

    await page.waitForTimeout(5000);


})