import { test, expect } from '@playwright/test';

test('Shadow Dom',async ({page})=>{

    await page.goto('https://watir.com/examples/shadow_dom.html')
    await page.pause();
    await page.getByRole('link', {name:'scroll.html'}).first().click();

    await page.pause();

})