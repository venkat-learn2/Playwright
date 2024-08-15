const { test, expect } = require('@playwright/test')

// test - to create a test
// expect - to validate a test

// anonymous function in javascript
// page fixture contains so many function

test('Home page', async ({ page }) => {

    await page.goto("https://www.demoblaze.com/")
    const TitleOfpage = await page.title();
    console.log('page title is:', TitleOfpage)

    // apply validation - to check if the title is exist or not
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL("https://www.demoblaze.com/")

    const pageURL = await page.url();
    console.log(`page url is : ${pageURL}`)

    await page.close(); // to close the page
})

