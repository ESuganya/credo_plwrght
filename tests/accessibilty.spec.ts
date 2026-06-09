//Accessibilty Testing -


import AxeBuilder from '@axe-core/playwright';
import { test, expect, firefox } from '@playwright/test';
//import { json } from 'node:stream/consumers';

test('Accessibilty',async ({page}, testinfo)=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    
    const accessScanResults=await new AxeBuilder({page}).analyze();

    expect(accessScanResults.violations.length).toEqual(0)

    await testinfo.attach('Report',{body: JSON.stringify('accessScanResults', null,2), contentType:'application/json'})

    const tags=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa']).analyze();
    expect(tags.violations.length).toEqual(0)  

})

