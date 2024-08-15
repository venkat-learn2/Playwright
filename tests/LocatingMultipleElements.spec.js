const { test, expect } = require('@playwright/test');

test('LocatingMultipleElement', async ({ page }) => {

    await page.goto("https://www.demoblaze.com/");

    // const cardElements = await page.$$('a')

    // for (const card of cardElements) {
    //     const linktext = await card.textContent();
    //     console.log(linktext)
    // }

    await page.waitForSelector(`//a[@class='hrefch']`)
    const titleElement = await page.$$(`//a[@class='hrefch']`)

    for (const title of titleElement) {
        const titletext = await title.textContent();
        console.log(titletext)
    }

})