const { test, expect } = require('@playwright/test');

test('test1@sanity', async ({ page }) => {
    console.log(`this is my test 1`);
})

test('test2@sanity', async ({ page }) => {
    console.log(`this is my test 2`);
})

test('test3@reg', async ({ page }) => {
    console.log(`this is my test3`);
})

test('test4@reg', async ({ page }) => {
    console.log(`this is my test 4`);
})

test('test5@sanity@reg', async ({ page }) => {
    console.log(`this is my test 5`);
})

// reporting we can do it in 2 ways first one is in config file another one is using command
// *** for list report ***
// - npx playwright test 36_Report.spec.js --reporter=list

// *** for line report ***
// - npx playwright test 36_Report.spec.js --reporter=line

// *** for html report ***
// - npx playwright test 36_Report.spec.js --reporter=html

// *** for JSON report ***
// - npx playwright test 36_Report.spec.js --reporter=json

// *** for junit report ***
// - npx playwright test 36_Report.spec.js --reporter=junit