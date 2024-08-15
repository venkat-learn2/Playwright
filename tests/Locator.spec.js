const { test, expect } = require('@playwright/test');

test('Locators', async ({ page }) => {

    await page.goto("https://www.demoblaze.com/");

    // for click action

    // await page.locator('locator').click();
    // await page.click("locator") // preferable

    // **** click on login button - property ****
    // await page.locator("id=login2").click();
    await page.click("id=login2");

    // **** to click on input field - css ****
    // await page.locator("#loginusername").fill();
    await page.fill("#loginusername", 'pavanol');
    // await page.type('#loginusername');

    //provide password
    await page.fill('#loginpassword', 'test@123');

    await page.click("//button[contains(text(),'Log in')]");

    // verify logout link present
    const logoutElement = await page.locator(`//a[contains(text(),'Log out')]`);

    await expect(logoutElement).toBeVisible();

    await page.close();

})

