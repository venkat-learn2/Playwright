const { test, expect } = require("@playwright/test")

test('keyboard actions', async ({ page }) => {

    await page.goto("https://gotranscript.com/text-compare");


    // await page.locator(`//textarea[@name='text1']`).fill('Welcome to automation');

    await page.fill(`//textarea[@name='text1']`, 'Welcome to automation');

    // await page.type(`//textarea[@name='text1']`,'Welcome to automation')

    // Control A
    await page.keyboard.press('Control+A')

    // Control C
    await page.keyboard.press('Control+C')

    // Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    // Control A
    await page.keyboard.press('Control+V')


    await page.waitForTimeout(5000);


})

