const { test, expect } = require('@playwright/test');


test('MultiSelect', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.selectOption("#colors", ['Blue', 'Red', 'Yellow']);


    // check no of options in dropdown
    const multiselect = await page.locator("#colors options");
    await expect(multiselect).toHaveCount(5);

    // using javascript
    const multiselect1 = await page.$$('#colors options') // $$ will return data as a form of array
    console.log(multiselect1.length);

    await expect(multiselect.length).toBe(5);



    await page.waitForTimeout(5000)

})