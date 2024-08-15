const { test, expect } = require('@playwright/test');

test('IFrame', async ({ page }) => {
    await page.goto(`https://ui.vision/demo/webtest/frames/`)

    // total frame
    const totalFrame = await page.frames();
    console.log(`total num of frame : ${totalFrame.length}`)

    // Frame object approach 1
    // const firstFrame = await page.frame('name'); if name is present
    const firstFrame = await page.frame({ url: `https://ui.vision/demo/webtest/frames/frame_1.html` });
    await firstFrame.fill(`//input[@name='mytext1']`, 'Venkat');

    await page.waitForTimeout(5000);

    // approach 2
    const secondFrame = await page.frameLocator(`//frame[@src='frame_2.html']`).locator(`//input[@name='mytext2']`);
    await secondFrame.fill('Venkat2-Frame');

    await page.waitForTimeout(5000);

})