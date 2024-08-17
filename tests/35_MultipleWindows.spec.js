//  * using browser context we can handle the multiple pages or windows (in playwright windows and page are same)
//  * we can create browser context using browser
// * inside browser context we can create multiple pages

const { test, expect, chromium } = require('@playwright/test');

test('handling multiple windows', async ({ }) => {

    const browser = await chromium.launch();

    const context = await browser.newContext(); // this will contains multiple pages

    const page1 = await context.newPage();

    const page2 = await context.newPage();

    const allPages = await context.pages();
    console.log(`total no of page is : ${allPages.length}`);

    await page1.goto("https://www.demoblaze.com/");
    await expect(page1).toHaveTitle('STORE');

    await page2.goto("https://gotranscript.com/text-compare");
    await expect(page2).toHaveTitle(`Free online text compare tool | GoTranscript`);

    await page1.waitForTimeout(5000);


})


test.only('handling multiple windows/page', async ({ }) => {

    const browser = await chromium.launch();

    const context = await browser.newContext(); // this will contains multiple pages

    const page1 = await context.newPage();

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle('OrangeHRM');

    const pagePromise = context.waitForEvent('page');
    await page1.locator(`//a[text()='OrangeHRM, Inc']`).click();

    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle('Human Resources Management Software | OrangeHRM')

    await page1.waitForTimeout(5000);
    await newPage.waitForTimeout(5000);

    await browser.close();

})

// third party reports supports

// default reports


//1)allure report
