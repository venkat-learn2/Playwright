const { test, expect } = require('@playwright/test');

test('Hidden dropdown', async ({ page }) => {
    await page.goto(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)

    await page.fill("//input[@name='username']", 'Admin')
    await page.fill("//input[@name='password']", 'admin123')

    await page.getByRole('button', { type: 'submit' }).click();

    await page.click(`//span[text()='PIM']`);
    await page.click(`(//div[@class='oxd-select-text-input' and text()='-- Select --'])[1]`);
    const optionsElement = await page.$$(`//div[@role='option']/span`);

    console.log(optionsElement, '15');

    for (let optEle of optionsElement) {
        const eachEleValue = await optEle.textContent();
        console.log(eachEleValue, '18');

        console.log(`hidden elements values are ... ${eachEleValue}`)
    }


    // setTimeout(() => { debugger; }, 5000)

    await page.waitForTimeout(5000);
})