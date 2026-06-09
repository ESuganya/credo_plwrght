import { test, expect, Locator } from '@playwright/test'

test('Mouse Actions', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    //Mouse Hover
    const pointme=page.getByRole('button', {name:'Point Me'})
    await pointme.hover();
    const mobiles=page.getByRole('link', {name:'Mobiles'})
    await expect(mobiles).toBeVisible();

    //Double click
    const copytext=page.getByRole('button', {name:'Copy Text'})
    await copytext.dblclick();

    //Right click
    //await copytext.click({button:'right'})

    //Drag and Drop
    const source=page.locator('#draggable');
    const dest=page.locator('#droppable')
    //await source.dragTo(dest, {targetPosition:{x:50, y:50}})

    //drag and drop manually
    await source.hover();
    await page.mouse.down();
    await dest.hover();
    await page.mouse.up();

    await page.pause()


})