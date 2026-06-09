import { test, expect, Locator } from '@playwright/test'

test('Dialogs', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //simple alert
    /* page.on('dialog', dia => {
        console.log("Type of alert:", dia.type())
        expect(dia.type()).toContain('alert');
        console.log(dia.message())
        dia.accept()
    });

    await page.locator('#alertBtn').click(); */

    //Confirmation alert
    /* page.on('dialog', dia => {
        console.log("Type of alert:", dia.type())
        expect(dia.type()).toContain('confirm');
        console.log(dia.message())
        dia.dismiss()
    });

    await page.locator('#confirmBtn').click(); */

    //Prompt Alert
    page.on('dialog', dia => {
        console.log("Type of alert:", dia.type())
        expect(dia.type()).toContain('prompt');
        console.log(dia.message())
        dia.accept("Suganya")
    });

    await page.locator('#promptBtn').click();
    await page.pause();

})