

import { test, expect,Locator } from '@playwright/test'

test('Static Webtable', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table=page.locator("table[name='BookTable']>tbody");

    const rows=table.locator('tr');
    const cnt=await rows.count();
    expect(cnt).toBe(7);
    await expect(rows).toHaveCount(7)

    const columns=rows.locator('th');
    await expect(columns).toHaveCount(4)

    //Read all datas
  /*   for(let i=1; i<cnt; i++)
    {
        const data=await rows.nth(i).locator('td').allInnerTexts();
        console.log(data)
    } */

    const secondrowdta=await rows.nth(2).locator('td').allInnerTexts();
    console.log("Second Row", secondrowdta)
   
    //Reading Selenium dtaa
      for(let i=1; i<cnt; i++)
    {
        const expText=await rows.nth(i).locator('td').nth(2).innerText();
        if(expText==='Selenium')
        {
            const price=await rows.nth(i).locator('td').nth(3).innerText();
            console.log(`${expText} - ${price}`)
        }
        
    }


})