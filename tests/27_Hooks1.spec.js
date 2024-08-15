// Playwright hooks

// 1) beforeEach - this hook executed before each indivisual test case.
// 2) afterEach - this hook executed after each indivisual test case.

// 3) beforeAll - this hook is executed before all the test have been run.
// 4) afterAll - this hook is executed after all the tests have been run.

import { test, expect } from '@playwright/test';

test('Home Page Test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html')
    //Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click()

    //Home Page
    const products = await page.$$('.hrefch')
    expect(products).toHaveLength(9)

    //Logout
    await page.locator('#logout2').click()
});


test('Add Product to cart Test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html')
    //Login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click()

    //Add product to cart
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
    await page.locator('//a[normalize-space()="Add to cart"]').click()

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })
    //Logout
    await page.locator('#logout2').click()

});
