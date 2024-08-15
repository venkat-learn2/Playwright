const { test, expect } = require('@playwright/test');

test('Auto suggest dropdown', async ({ page }) => {
    await page.goto(`https://www.redbus.in/`);
    await page.click(`//label[@class='sc-EHOje djguiA' and text()='From']/preceding-sibling::input`);

    await page.fill(`//label[@class='sc-EHOje djguiA' and text()='From']/preceding-sibling::input`, 'dehli');
    await page.waitForSelector(`//text[contains(text(),'Indira Gandhi International Airport')]`);

    const options = await page.$$(`//text[contains(@class, 'placeHolderMainText')]`);

    for (let option of options) {
        const value = await option.textContent();
        console.log(`options are ... ${value}`)
        if (value.includes('Morigate')) {
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(5000);
})