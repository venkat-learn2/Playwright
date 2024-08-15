const { test, expect } = require('@playwright/test');

test.skip('Alert dialog prompt', async ({ page }) => {

    // By default, dialogs are auto - dismissed by Playwright, 
    //so you don't have to handle them. However, 
    //you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enabling alert handling // dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })

    await page.click(`//button[text()='Alert']`)

    await page.waitForTimeout(5000);
})

test.skip('Confirmation dialog - with ok and cancel ', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enabling alert handling // dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();// close by using OK button
        // await dialog.dismiss(); // close by using cancel button
    })

    await page.click(`//button[text()='Confirm Box']`);

    await expect(page.locator(`//p[@id='demo']`)).toHaveText(`You pressed OK!`)

    await page.waitForTimeout(5000);
})

test('Prompt dialog - with ok and cancel and input box ', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enabling alert handling // dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Venkat');// close by using OK button
        // await dialog.dismiss(); // close by using cancel button
    })

    await page.click(`//button[text()='Prompt']`);

    await expect(page.locator(`//p[@id='demo']`)).toHaveText(`Hello Venkat! How are you today?`)

    await page.waitForTimeout(5000);
})