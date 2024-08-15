const { test, expect } = require('@playwright/test');

test('Inner frame', async ({ page }) => {
    await page.goto(`https://ui.vision/demo/webtest/frames/`);

    const thirdFrame = await page.frame({ url: `https://ui.vision/demo/webtest/frames/frame_3.html` });
    await thirdFrame.fill(`//input[@name='mytext3']`, `VenkatFrame333`);

    // Nested Frame
    const innerFrame = await thirdFrame.childFrames();
    await innerFrame[0].locator(`//span[text()='Hi, I am the UI.Vision IDE']`).click()

    await page.waitForTimeout(5000);
})