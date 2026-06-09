import { test, expect, Locator } from '@playwright/test'

test('Basic auth Pop up', async ({ browser,page }) => {

    //Approach 1  - Directly login the url with credentials
   /*  await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    await page.pause();
    await expect(page.getByText('Congratulations')).toBeVisible(); */

    //Approach 2 - pass credentials in browser Context
    const contxt=await browser.newContext({httpCredentials:{username:'admin', password:'admin'}})
    const page1=await contxt.newPage();
    await page1.goto('https://the-internet.herokuapp.com/basic_auth')
    await expect(page1.getByText('Congratulations')).toBeVisible();



})