const { test, expect } = require('@playwright/test');


test('upload files', async ({ page }) => {

    await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html');

    await page.locator(`//input[@type='file']`).setInputFiles('data/JSON/ent_scenario_no_row.json');

    await page.waitForTimeout(5000);
})

test.only('multiple files', async ({ page }) => {

    await page.goto(`https://davidwalsh.name/demo/multiple-file-upload.php`);

    await page.locator(`//input[@id='filesToUpload']`)
        .setInputFiles(['data/Images/writebackExecution.png', 'data/Images/image (15).png']);

    await expect(page.locator(`(//ul[@id='fileList']/li)[1]`)).toHaveText('writebackExecution.png');
    await expect(page.locator(`(//ul[@id='fileList']/li)[2]`)).toHaveText('image (15).png');

    await page.waitForTimeout(5000);
    // for removing files
    await page.locator(`//input[@id='filesToUpload']`).setInputFiles([]);

    await expect(page.locator(`//ul[@id='fileList']/li`)).toHaveText('No Files Selected');

    await page.waitForTimeout(5000);

})