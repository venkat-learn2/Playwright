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

// npx playwright test 32_Tag.spec.js--headed--grep @sanity
// npx playwright test 32_Tag.spec.js--headed--grep @sanity--grep - invert @reg