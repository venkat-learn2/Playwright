const { test, expect } = require('@playwright/test');

test('page screenshot', async ({ page }) => {
    await page.goto("https://demo.opencart.com/");
    await page.screenshot({ path: `screenshots/firstImage.png` })
})

test('full screenshot', async ({ page }) => {
    await page.goto("https://demo.opencart.com/");
    await page.screenshot({ path: `screenshots/secondImage.png`, fullPage: true })
})

test('element screenshot', async ({ page }) => {
    await page.goto("https://demo.opencart.com/");
    await page.locator(`//div[@id='logo']`).screenshot({ path: `screenshots/thirdImage.png` })
})

// npx playwright show - trace test - results /31_Tracing - page - screenshot - chromium / trace.zip