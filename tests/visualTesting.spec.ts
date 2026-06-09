//Visual Testing -


import { test, expect, firefox } from '@playwright/test';

test('Visual Testing',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')  
    //await page.screenshot({path:'homepage.png'})
    await expect(await page).toHaveScreenshot('homepage.png')
    const firstname=await page.locator('#name');
    testinfo.att
   // await expect(await firstname.screenshot()).toMatchSnapshot('firstname.png')
    //await firstname.fill('Suganya')
    //Assertions - Auto-Retrying Assertion, Non-Retrying assertions
    //Hard and Soft Assertions

})