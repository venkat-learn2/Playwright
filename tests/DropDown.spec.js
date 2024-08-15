const { test, expect } = require('@playwright/test');


test('RadioButton', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Multiple wasy to select option from dropdown
    // using label - prefered
    await page.locator("//select[@id='country']/option").selectOption({ 'label': 'India' });
    // using text
    await page.locator("//select[@id='country']/option").selectOption("India");
    // using value attr
    await page.locator("//select[@id='country']/option").selectOption({ value: 'uk' });
    // using index
    await page.locator("//select[@id='country']/option").selectOption({ index: 2 });

    // alternative ways
    await page.selectOption("//select[@id='country']/option", 'India')

    //Assertions with dropdown
    // 1) total no of dropdown
    const optionCount = await page.locator("//select[@id='country']/option");
    await expect(optionCount).toHaveCount(10);

    //2) check no of options in dropdown
    const optionCount1 = await page.$$("//select[@id='country']/option");
    console.log(`Total no of options is:${optionCount1.length}`)

    await expect(optionCount1.length).toBe(10);

    //3) check presence of value in the dropdown
    const optionContent = await page.locator("//select[@id='country']/option").textContent();
    await expect(optionContent.includes('India')).toBeTruthy();

    const optionelement = await page.$$("//select[@id='country']/option")
    let status = false;
    for (const option of optionelement) {
        let singleOption = await option.textContent();
        if (singleOption.includes('India')) {
            status = true;
        }
    }

    await expect(status).toBeTruthy();

    await page.waitForTimeout(5000);

})