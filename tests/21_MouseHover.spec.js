const { test, expect } = require('@playwright/test');


test('Mouse Hover', async ({ page }) => {
    await page.goto("https://demo.opencart.com/");

    const Element1 = await page.locator(`//a[text()='Desktops' and @class='nav-link dropdown-toggle']`);

    // mouse hover

    await Element1.hover();
    await page.click(`//a[text()='Mac (1)' and @class='nav-link']`);

    await page.waitForTimeout(5000);
})