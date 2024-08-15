const { test, expect } = require('@playwright/test');

test('Pagination_Webtable', async ({ page }) => {
    await page.goto(`https://testautomationpractice.blogspot.com/`);
    const Table = await page.locator(`#productTable`);

    // total number of rows and colums
    const Columns = await Table.locator('thead tr th');
    console.log(`Num of columns ${await Columns.count()}`);

    const rows = await Table.locator('tbody tr');
    console.log(`Num of rows ${await rows.count()}`);

    expect(await Columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);

    await page.waitForTimeout(5000);

    // select the checkbox for particular row
    const matchedRow = await rows.filter({
        has: page.locator('td'),
        hasText: 'Product 4'
    })

    await matchedRow.locator('input').check();
    await page.waitForTimeout(5000);

    // select multiple products by re usable

    await selectMultipleProduct(rows, page, 'Product 1')
    await selectMultipleProduct(rows, page, 'Product 2')
    await selectMultipleProduct(rows, page, 'Product 3')

    await page.waitForTimeout(5000);

    // single page - print all the product details

    // const rowCount = await rows.count();
    // for (let i = 0; i < rowCount; i++) {
    //     const currentRow = await rows.nth(i);
    //     const tds = await currentRow.locator('td');
    //     // console.log(tds, 'tds');
    //     const tdCount = await tds.count();
    //     for (let j = 0; j < tdCount; j++) {
    //         console.log(await tds.nth(j).textContent());
    //     }
    // }

    // read data from all the pages from the table

    const pages = await page.locator(`//ul[@id='pagination']//li//a`);
    console.log(`Num of page is : ${await pages.count()}`);

    for (let k = 0; k < pages.count(); k++) {
        if (k > 0) {
            await pages.nth(p).click();
        }

        const rowCount = await rows.count();
        for (let i = 0; i < rowCount; i++) {
            const currentRow = await rows.nth(i);
            const tds = await currentRow.locator('td');
            // console.log(tds, 'tds');
            const tdCount = await tds.count();
            for (let j = 0; j < tdCount; j++) {
                console.log(await tds.nth(j).textContent(), '66');
            }
        }
    }
})

async function selectMultipleProduct(rows, page, productName) {
    const matchedRow = await rows.filter({
        has: page.locator('td'),
        hasText: productName
    })
    await matchedRow.locator('input').check();
}