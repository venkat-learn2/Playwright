const { test, expect } = require('@playwright/test');


test('SoftAssertions', async ({ page }) => {

    await page.goto("https://www.demoblaze.com/");

    //Hard Assertions:
    // await expect(page).toHaveTitle("STORE");
    // await expect(page).toHaveURL("https://www.demoblaze.com/");
    // const isHome = page.locator("//a[@class='nav-link' and text()='Home ']");
    // await expect(isHome).toBeVisible();

    //Soft Assertions
    await expect.soft(page).toHaveTitle("STORE123");
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/");
    const isHome = page.locator("//a[@class='nav-link' and text()='Home ']");
    await expect.soft(isHome).toBeVisible();

})