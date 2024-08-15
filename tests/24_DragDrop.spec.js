const { test, expect } = require('@playwright/test');

test('drag and drop', async ({ page }) => {
    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

    const sourceEle = page.locator(`//div[@id='box3']`);
    const targetEle = page.locator(`//div[@id='box103']`);

    // Approach 1
    await sourceEle.hover();
    await page.mouse.down();

    await targetEle.hover();
    await page.mouse.up();

    await page.waitForTimeout(5000);

    //Approach 2

    const sourceEle1 = page.locator(`//div[@id='box4']`);
    const targetEle1 = page.locator(`//div[@id='box104']`);

    await sourceEle1.dragTo(targetEle1);
    await page.waitForTimeout(5000);

})