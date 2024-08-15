const { test, expect } = require('@playwright/test');


test('Mouse right', async ({ page }) => {
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    const button = await page.locator(`//span[text()='right click me']`);


    // mouse right click

    await button.click({ button: 'right' });
    // await button.click({ button: 'left' });
    const lists = await page.$$(`//li[contains(@class,'context-menu-item context-menu-icon')]/span`);

    for (const list of lists) {
        const indList = await list.textContent();
        console.log(`element is : ${indList}`);
    }

    await page.waitForTimeout(5000);
})