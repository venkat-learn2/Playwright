const { test, expect } = require('@playwright/test');

// only
// test.only('test1', async ({ page }) => {
//     console.log(`this is my test 1`);
// })

//skip
// test.skip('test2', async ({ page }) => {
//     console.log(`this is my test 2`);
// })

// skip using condition

// test('test3', async ({ page, browserName }) => {
//     console.log(`this is my test 3`);
//     console.log(`browser name is ${browserName}`);

//     if (browserName === 'chromium') {
//         test.skip()
//     }
//     console.log(`this is my test using browser condition`);
// })

//fixme
// test('test4', async ({ page }) => {
//     console.log(`this is my test 4 is started`);
//     test.fixme();
//     console.log(`this is my test 4`);
// })

// fail - negative testing

// test('test5', async ({ page }) => {
//     test.fail();
//     console.log(`this is my test 5`);
//     expect(1).toBe(2)
// })

// test('test 6', async ({ page, browserName }) => {
//     console.log(`this is my test 6`);
//     if (browserName === 'firefox') {
//         test.fail()
//     }
//     expect(1).toBe(1)
// })

//slow
test('test 7', async ({ page }) => {
    test.slow(); // slow method will increae 3X in the config timeout
    console.log('this is my test 7');
    await page.goto("https://www.demoblaze.com/")
})

test('test 8', async ({ page }) => {
    test.setTimeout(5000); // slow method will increae 3X in the config timeout
    console.log('this is my test 8');
    await page.goto("https://www.demoblaze.com/")
})


