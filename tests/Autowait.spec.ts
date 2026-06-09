import { test, expect, firefox } from '@playwright/test';

test('Auto wait',async ({page})=>{

   // test.slow()   //3* deafualt timeout
   // test.setTimeout(50000)
    await page.goto('https://testautomationpractice.blogspot.com/')
    const firstname=await page.locator('#name');
    await expect(firstname).toBeVisible();
    //await firstname.fill('Suganya')
    //Assertions - Auto-Retrying Assertion, Non-Retrying assertions
    //Hard and Soft Assertions

})

test('List Report', ()=>{})

test.fail('Fail', ()=>{})

