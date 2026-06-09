//Autosuggest dropdown 

import { test, expect,Locator } from '@playwright/test'

test('Dynamic Dropdown', async ({page})=>{

    await page.goto('https://www.flipkart.com/');

    await page.locator('.b3wTlE').click();

    await page.getByRole('textbox', {name: 'Search for Products, Brands and More'}).fill('Smart');
    await page.waitForTimeout(3000)
    const dpdwnOptions=page.locator('ul>li');
    const count=await dpdwnOptions.count();
    for(let i=0; i<count; i++)
    {
       const text=await dpdwnOptions.nth(i).innerText();
        if(text==='smart tv')
        {
             await dpdwnOptions.nth(i).click();
             break;
        }
        
    }
    const drpArray=dpdwnOptions.all();
   await page.pause();

})