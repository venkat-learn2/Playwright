const { test, expect } = require('@playwright/test');

test.beforeAll(async () => {
    console.log('before all hook....')
})

test.afterAll(async () => {
    console.log('after all hooks....');
})

test.beforeEach(async () => {
    console.log('before each for each case');
})

test.afterEach(async () => {
    console.log('after each for each case');
})

test.describe.skip('group1', () => {
    test('Grouping -  Test1', async ({ page }) => {
        await console.log('1')
    })

    test('Grouping -  Test2', async ({ page }) => {
        await console.log('2')
    })
})

test.describe.only('Group2', () => {
    test('Grouping -  Test3', async ({ page }) => {
        await console.log('3')
    })


    test('Grouping -  Test4', async ({ page }) => {
        await console.log('4')
    })
})

